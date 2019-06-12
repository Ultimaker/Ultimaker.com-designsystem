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

    try {

      def scmVariables = checkout scm

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

      def slugify = new Slug()

      String nginxContainer = 'eu.gcr.io/um-website-193311/storybook/nginx'
      String nodeContainer = 'eu.gcr.io/um-website-193311/storybook/node'
      String branch = slugify.slug(env.BRANCH_NAME)
      String commit = scmVariables.GIT_COMMIT

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

      stage('update deployments') {
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

      slackSend color: 'good',
        channel: '#um_com_deployments',
        message: """
          Deployment updated: <https://storybook.k8s-dev.ultimaker.works|Storybook> (<${env.BUILD_URL}|Job>)
          Components: storybook--nginx, storybook--node
          Version: <https://github.com/Ultimaker/Ultimaker.com-designsystem/commit/${commit}|${commit}>
          """.stripIndent()

    } catch (e) {

      // This will run if something goes wrong

      currentBuild.result = 'FAILURE'

      throw e

    } finally {

      // This will always run

      String currentResult = currentBuild.result ?: 'SUCCESS'
      String previousResult = currentBuild.previousBuild?.result

      if (currentResult == 'UNSTABLE') {
        // This will run only if the run was marked as unstable
      }

      if (currentResult == 'ABORTED') {
        // This will run only if the run was aborted
      }

      if (currentResult == 'SUCCESS') {
        // This will run only if the run was marked as success
      }

      if (previousResult != null && previousResult != currentResult) {
        // This will run only if the state of the Pipeline has changed
        // For example, if the Pipeline was previously failing but is now successful
      }

    } // try/catch/finally
  }
}
