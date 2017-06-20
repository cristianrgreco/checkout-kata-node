node {

  def app

  stage('Checkout') {
    checkout scm
  }

  stage('Test') {
    nodejs(nodeJSInstallationName: latest) {
      sh 'npm test'
    }
  }
}
