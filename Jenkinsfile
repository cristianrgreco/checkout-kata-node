pipeline {
  agent any

  stages {
    stage('Checkout') {
      checkout scm
    }

    stage('Test') {
      nodejs(nodeJSInstallationName: latest) {
        sh 'npm test'
      }
    }
  }
}
