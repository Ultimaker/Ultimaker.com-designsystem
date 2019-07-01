#!/usr/bin/env groovy

@Library('k8s-jenkins-tools') _

import com.ultimaker.Slug

// max length is 64 characters, UUID is 36
String label = "designsystem-${UUID.randomUUID().toString()}"

podTemplate(
  label: label,
  activeDeadlineSeconds: 900,
  containers: [
    containerTemplate(
      name: 'node',
      image: 'eu.gcr.io/um-website-193311/ultimaker.com/node:latest',
      command: 'cat',
      alwaysPullImage: true,
      ttyEnabled: true
    ),
    containerTemplate(
      name: 'node-chromium',
      image: 'eu.gcr.io/um-website-193311/ultimaker.com/node-chromium:latest',
      command: 'cat',
      alwaysPullImage: true,
      ttyEnabled: true
    )
  ]
) {

  node(label) {

    Object scmVariables = checkout scm
    Slug slugify = new Slug()
    String branch = slugify.slug(env.BRANCH_NAME)
    String commit = scmVariables.GIT_COMMIT
    String nginxContainer = 'eu.gcr.io/um-website-193311/storybook/nginx'
    String nodeContainer = 'eu.gcr.io/um-website-193311/storybook/node'

    try {

      stage('install dependencies') {
        container('node') {
          sh 'npm ci'
        }
      }

      stage('validate code') {
        parallel(
          'linting': {
            container('node') {
              sh 'npm run lint'
            }
          },
          'unit test': {
            container('node-chromium') {
              sh 'npm run unit'
            }
          },
          'snapshot tests': {
            container('node') {
              sh 'npm run snapshots'
            }
          }
        )
      }

      stage('compile code') {
        parallel(
          'components': {
            container('node') {
              sh 'npm run build'
            }
          },
          'storybook': {
            container('node') {
              sh 'npm run build-storybook'
            }
          }
        )
      }

      if (env.BRANCH_NAME.startsWith('PR-')) {
        currentBuild.result = 'SUCCESS'

        return
      }

      stage('authenticate gcloud') {
        withCredentials([file(credentialsId: 'gcloud-jenkins-service-account', variable: 'GCLOUD_KEY_FILE')]) {
          sh """
          gcloud --quiet auth configure-docker
          gcloud auth activate-service-account --key-file ${GCLOUD_KEY_FILE}
          gcloud config set project um-website-193311
          gcloud container clusters get-credentials development --region europe-west4
          """
        }
      }

      stage('build containers') {
        parallel(
          'nginx': {
            sh "docker build --file docker/nginx/Dockerfile --tag ${nginxContainer}:${branch} --tag ${nginxContainer}:${commit} ."
          },
          'node': {
            container('node') {
              sh 'npm install --production'
            }
            sh "docker build --file docker/node/Dockerfile --tag ${nodeContainer}:${branch} --tag ${nodeContainer}:${commit} ."
          }
        )
      }

      stage('push containers') {
        parallel(
          'nginx': {
            sh "docker push ${nginxContainer}:${branch}"
            sh "docker push ${nginxContainer}:${commit}"
          },
          'node': {
            sh "docker push ${nodeContainer}:${branch}"
            sh "docker push ${nodeContainer}:${commit}"
          }
        )
      }

      if ('master' != env.BRANCH_NAME) {
        currentBuild.result = 'SUCCESS'

        return
      }

    } catch (e) {

      currentBuild.result = 'FAILURE'

      slackSend color: 'danger',
        channel: '#ci-builds',
        message: "Build failed: designsystem ${env.BRANCH_NAME} (<${env.BUILD_URL}|Job>)"

      throw e

    }

    try {

      stage('update storybook') {
        sh """
          cat <<EOF | parallel --verbose --jobs 2 --colsep ' ' kubectl --namespace acceptance set image {1} {2}
          deployment/storybook--nginx nginx=${nginxContainer}:${commit}
          deployment/storybook--node node=${nodeContainer}:${commit}
          EOF

          cat <<EOF | parallel --verbose --jobs 2 kubectl --namespace acceptance rollout status
          deployment/storybook--nginx
          deployment/storybook--node
          EOF
          """.stripIndent()
      }

      deploymentUpdated('storybook', 'https://storybook.k8s-dev.ultimaker.works', env.BRANCH_NAME, commit)

    } catch (e) {

      currentBuild.result = 'FAILURE'

      slackSend color: 'danger',
        channel: '#ci-deployments',
        message: "Deployment to storybook failed (<${env.BUILD_URL}|Job>)"

      throw e

    }
  }
}

def deploymentUpdated(name, url, branch, commit) {
  slackSend channel: '#ci-deployments',
    attachments: [[
      color: "good",
      fallback: "Deployment \"${name}\" was updated.",
      pretext: "Deployment \"*<${url}|${name}>*\" was updated ( <${env.BUILD_URL}|job> / <${env.BUILD_URL}console|console> ).",
      fields: [
        [ title: "Component", value: "<https://github.com/Ultimaker/Ultimaker.com-designsystem|Designsystem>" ],
        [ title: "Branch", value: "<https://github.com/Ultimaker/Ultimaker.com-designsystem/tree/${branch}|${branch}>" ],
        [ title: "Commit", value: "<https://github.com/Ultimaker/Ultimaker.com-designsystem/commit/${commit}|${commit}>" ],
      ]
    ]]
}
