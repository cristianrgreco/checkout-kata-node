node('node') {

  stage('Checkout') {
    checkout scm
  }

  stage('Test') {
    sh 'node -v'
    sh 'npm test'
  }
}
