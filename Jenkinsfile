#!/usr/bin/env groovy

@Library('k8s-jenkins-tools') _

String label = generateLabel('designsystem')

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
    )
  ]
) {

  node(label) {

    Object scmVariables = checkout scm
    String branch = slugify(env.BRANCH_NAME)
    String commit = scmVariables.GIT_COMMIT
    String nginxContainer = 'eu.gcr.io/um-website-193311/storybook/nginx'
    String nodeContainer = 'eu.gcr.io/um-website-193311/storybook/node'

    try {

      stage('install dependencies') {
        STAGE_NAME = env.STAGE_NAME

        container('node') {
          sh 'npm ci'
        }
      }

      stage('validate code') {
        STAGE_NAME = env.STAGE_NAME

        container('node') {
          sh 'npm run lint:diff'
        }
      }

      stage('compile code') {
        STAGE_NAME = env.STAGE_NAME

        container('node') {
          sh 'npm run build'
        }
      }

      if (env.BRANCH_NAME.startsWith('PR-')) {
        currentBuild.result = 'SUCCESS'

        return
      }

      if (env.BRANCH_NAME != 'master') {
        currentBuild.result = 'SUCCESS'

        return
      }

      stage('authenticate gcloud') {
        STAGE_NAME = env.STAGE_NAME

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
        STAGE_NAME = env.STAGE_NAME

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
        STAGE_NAME = env.STAGE_NAME

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

    } catch (e) {

      currentBuild.result = 'FAILURE'

      buildFailure(
        env.BUILD_URL,
        'Storybook',
        'Ultimaker.com-designsystem',
        env.BRANCH_NAME,
        STAGE_NAME
      )

      throw e

    }

    try {

      stage('update storybook') {
        sh """
          cat <<EOF | parallel --verbose --jobs 2 --colsep ' ' /update-deployment.sh acceptance {1} {2} {3} {4}
          deployment/storybook--nginx nginx ${nginxContainer} ${commit}
          deployment/storybook--node node ${nodeContainer} ${commit}
          EOF
          """.stripIndent()
      }

      updateDeploymentSuccess(
        'development',
        env.BUILD_URL,
        'https://storybook.k8s-dev.ultimaker.works',
        'Storybook',
        'Ultimaker.com-designsystem',
        env.BRANCH_NAME,
        commit
      )

    } catch (e) {

      currentBuild.result = 'FAILURE'

      updateDeploymentFailure('development', env.BUILD_URL, 'Storybook')

      throw e

    }
  }
}
