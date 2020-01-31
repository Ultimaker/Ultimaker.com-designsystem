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

      currentBuild.result = 'SUCCESS'

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
  }
}
