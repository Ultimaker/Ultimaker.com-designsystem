#!/usr/bin/env groovy

@Library('k8s-jenkins-tools') _

import com.ultimaker.Slug

// max length is 64 characters, UUID is 36
String label = "jenkins-slave-${UUID.randomUUID().toString()}"

podTemplate(
  label: label,
  activeDeadlineSeconds: 900,
  containers: [
    containerTemplate(
      name: 'jnlp',
      image: 'eu.gcr.io/um-website-193311/jenkins/jnlp-slave',
      args: '${computer.jnlpmac} ${computer.name}',
      ttyEnabled: true
    ),
    containerTemplate(
      name: 'node',
      image: 'node:10.15-jessie',
      command: 'cat',
      envVars: [
        secretEnvVar(key: 'BROWSERSTACK_USER', secretName: 'browserstack-credentials', secretKey: 'username'),
        secretEnvVar(key: 'BROWSERSTACK_ACCESS_KEY', secretName: 'browserstack-credentials', secretKey: 'access-key')
      ],
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
            container('node') {
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

      stage('build containers') {
        parallel(
          'nginx': {
            sh "docker build --file docker/nginx/Dockerfile --tag ${nginxContainer}:${branch} --tag ${nginxContainer}:${commit} ."
          },
          'node': {
            sh "docker build --file docker/node/Dockerfile --tag ${nodeContainer}:${branch} --tag ${nodeContainer}:${commit} ."
          }
        )
      }

      stage('authenticate gcloud') {
        withCredentials([file(credentialsId: 'gcloud-jenkins-service-account', variable: 'GCLOUD_KEY_FILE')]) {
          sh """
          gcloud --quiet components update
          gcloud --quiet auth configure-docker
          gcloud auth activate-service-account --key-file ${GCLOUD_KEY_FILE}
          gcloud config set project um-website-193311
          gcloud container clusters get-credentials development --region europe-west4
          """
        }
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
        kubectl --namespace storybook set image deployment/storybook--node node=${nodeContainer}:${commit}
        kubectl --namespace storybook set image deployment/storybook--nginx nginx=${nginxContainer}:${commit}
        cat EOF | kubectl --namespace storybook rollout status
        deployment/storybook--node
        deployment/storybook--nginx
        EOF
        """.stripIndent()
      }

      slackSend color: 'good',
        channel: '#um_com_deployments',
        message: "Deployment updated: https://storybook.k8s-dev.ultimaker.works/ (<${env.BUILD_URL}|Job>)"

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
