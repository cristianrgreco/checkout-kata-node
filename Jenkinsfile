pipeline {

  agent any

  stage('Checkout') {
    checkout scm
  }

  stage('Test') {
    nodejs(nodeJSInstallationName: latest) {
      sh 'npm test'
    }
  }
}
