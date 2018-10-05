#!/usr/bin/groovy
@Library('k8s-jenkins-tools') _
import com.ultimaker.Slug
import com.ultimaker.Random

def credentialsFile = 'gcloud-jenkins-service-account'
def projectName = 'um-website-193311'
def clusterName = 'ultimaker-dev'
def deploymentName = 'development'
def zone = 'europe-west4-b'

def validFor = '4 days'

def slugify = new Slug()
def branchSlug = slugify.slug(env.BRANCH_NAME)

def random = new Random()
def podLabel = random.string(32)

podTemplate(label: "${podLabel}", inheritFrom: 'default', containers: [
  containerTemplate(name: 'node', image: 'node:8.11.3', ttyEnabled: true, command: 'cat', envVars: [
      secretEnvVar(key: 'BROWSERSTACK_USER', secretName: 'browserstack-credentials', secretKey: 'username'),
      secretEnvVar(key: 'BROWSERSTACK_ACCESS_KEY', secretName: 'browserstack-credentials', secretKey: 'access-key')
  ]),
  containerTemplate(name: 'sonar-scanner', image: 'newtmitch/sonar-scanner:3.2.0-alpine', ttyEnabled: true, command: 'cat')
], volumes: [
  secretVolume(mountPath: '/var/secrets', secretName: 'sonarqube-config')
]) {
  node("${podLabel}") {
    def scmVars = checkout scm
    def commitHash = scmVars.GIT_COMMIT
    def repo = scmVars.GIT_URL.replaceAll('https://github.com/', '').replaceAll('.git', '')

    if (env.BRANCH_NAME == "master") {
      clusterName = 'ultimaker-prod'
      deploymentName = 'canary'
      zone = 'europe-west3-b'

      stage('static code analysis') {
        container('sonar-scanner') {
          sh "sonar-scanner -Dproject.settings=/var/secrets/config.properties -Dsonar.projectKey=design-system -Dsonar.projectName=${repo} -Dsonar.github.repository=${repo} -Dsonar.projectBaseDir=`pwd` -Dsonar.sources=src"
        }
      }
    } else if (env.BRANCH_NAME.startsWith("PR-") == true) {
      def prNumber = env.BRANCH_NAME.replace("PR-", "")
      stage('static code analysis') {
        container('sonar-scanner') {
          sh "sonar-scanner -Dproject.settings=/var/secrets/config.properties -Dsonar.projectKey=design-system -Dsonar.projectName=${repo} -Dsonar.github.repository=${repo} -Dsonar.projectBaseDir=`pwd` -Dsonar.sources=src -Dsonar.analysis.mode=preview -Dsonar.github.pullRequest=${prNumber}"
        }
      }

      currentBuild.result = "SUCCESS"
      return
    }

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
        },
        "snapshot tests": {
          container('node') {
            sh 'npm run snapshots'
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
        },
        "build storybook": {
          container('node') {
            sh 'npm run build-storybook'
          }
        }
      )
    }

    stage('build images') {
      parallel(
        "build nginx image": {
          container('jnlp') {
            sh "docker build -f docker/nginx/Dockerfile -t eu.gcr.io/um-website-193311/storybook/nginx:${branchSlug} ."
            sh "docker tag eu.gcr.io/um-website-193311/storybook/nginx:${branchSlug} eu.gcr.io/um-website-193311/storybook/nginx:${commitHash}"
          }
        },
        "build node image": {
          container('jnlp') {
            sh "docker build -f docker/nodejs/Dockerfile -t eu.gcr.io/um-website-193311/storybook/node:${branchSlug} ."
            sh "docker tag eu.gcr.io/um-website-193311/storybook/node:${branchSlug} eu.gcr.io/um-website-193311/storybook/node:${commitHash}"
          }
        }
      )
    }

    stage('authenticate gcloud') {
      container('jnlp') {
        withCredentials([file(credentialsId: credentialsFile, variable: 'GCLOUD_KEY_FILE')]) {
          sh "gcloud auth activate-service-account --key-file=${GCLOUD_KEY_FILE}"
          sh "gcloud config set project ${projectName}"
          sh "gcloud container clusters get-credentials ${clusterName} --zone ${zone} --project ${projectName}"
        }
      }
    }

    stage('push images') {
      parallel(
        "push nginx image": {
          container('jnlp') {
            sh "gcloud docker -- push eu.gcr.io/um-website-193311/storybook/nginx:${branchSlug}"
            sh "gcloud docker -- push eu.gcr.io/um-website-193311/storybook/nginx:${commitHash}"
          }
        },
        "push node image": {
          container('jnlp') {
            sh "gcloud docker -- push eu.gcr.io/um-website-193311/storybook/node:${branchSlug}"
            sh "gcloud docker -- push eu.gcr.io/um-website-193311/storybook/node:${commitHash}"
          }
        }
      )
    }

    stage('deploy') {
      container('jnlp') {
        sh "sed -i s#_BRANCH_SLUG_#${branchSlug}# `find k8s/${deploymentName} -type f -name '*.yaml'`"
        sh "sed -i s#_GIT_COMMIT_#${commitHash}# `find k8s/${deploymentName} -type f -name '*.yaml'`"
        sh "sed -i s#_IMAGE_TAG_#${commitHash}# `find k8s/${deploymentName} -type f -name '*.yaml'`"
        sh "sed -i s#_UPDATED_AT_#`date +%Y%m%dT%H%M%S`# `find k8s/${deploymentName} -type f -name '*.yaml'`"
        sh "sed -i s#_EXPIRES_AT_#`date -d '+${validFor}' +%Y%m%dT%H%M%S`# `find k8s/${deploymentName} -type f -name '*.yaml'`"

        sh "kubectl apply -f k8s/${deploymentName}/namespace.yaml || true"
        sh "kubectl apply --recursive=true -f k8s/${deploymentName}/"
      }
    }

    stage('notify') {
        def ingress = readYaml file: "k8s/${deploymentName}/nginx/ingress.yaml"
        def hostname = ingress.spec.rules[0].host

        slackSend color: 'good',
            channel: "#um_com_deployments",
            message: """
Gentlemen, m'ladies, I have deployed your Ultimaker.com-designsystem:${env.BRANCH_NAME} branch on:
https://${hostname}

It will automagically be removed when this branch is deleted on remote.
  """
    }
  }
}
