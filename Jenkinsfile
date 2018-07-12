#!/usr/bin/groovy
@Library('k8s-jenkins-tools') _
import com.ultimaker.Random

def random = new Random()
def podLabel = random.string(32)

podTemplate(label: "${podLabel}", inheritFrom: 'default', containers: [
  containerTemplate(name: 'node', image: 'node:8.11.3', ttyEnabled: true, command: 'cat', envVars: [
      secretEnvVar(key: 'BROWSERSTACK_USER', secretName: 'browserstack-credentials', secretKey: 'username'),
      secretEnvVar(key: 'BROWSERSTACK_ACCESS_KEY', secretName: 'browserstack-credentials', secretKey: 'access-key')
  ])
]) {
  node("${podLabel}") {
    def scmVars = checkout scm
    def commitHash = scmVars.GIT_COMMIT

    stage('install dependencies') {
      container('node') {
        sh 'npm install'
      }
    }

    stage('verify code') {
      parallel(
        "lint code": {
          container('node') {
            sh 'npm run lint'
          }
        },
        "unit test": {
          container('node') {
            sh 'npm run unit'
          }
        }
      )
    }

    stage('build code') {
      parallel(
        "build components": {
          container('node') {
            sh 'npm run build'
          }
        }
      )
    }
  }
}
