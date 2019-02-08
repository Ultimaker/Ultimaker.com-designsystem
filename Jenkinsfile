#!/usr/bin/env groovy

@Library('k8s-jenkins-tools') _

import com.ultimaker.Slug

// max length is 64 characters, UUID is 36
def label = "jenkins-slave-${UUID.randomUUID().toString()}"

podTemplate(
  label: label,
  activeDeadlineSeconds: 900,
  containers: [
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

    if ('master' != env.BRANCH_NAME) {
      currentBuild.result = 'SUCCESS'
      return
    }

    def nginxContainer = 'eu.gcr.io/um-website-193311/storybook/nginx'
    def nodeContainer = 'eu.gcr.io/um-website-193311/storybook/node'
    def slugify = new Slug()
    def branch = slugify.slug(env.BRANCH_NAME)
    def commit = scmVariables.GIT_COMMIT

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

    stage('update deployments') {
      sh "kubectl set image --namespace storybook deployment/storybook--node node=${nodeContainer}:${commit}"
      sh "kubectl set image --namespace storybook deployment/storybook--nginx nginx=${nginxContainer}:${commit}"
    }
  }
}
