node {

  def app

  stage('Clone Repository') {
    checkout scm
  }

  stage('Build Image') {
    app = docker.build('checkout-kata-node')
  }

  stage('Test Image') {
    app.inside {
      npm test
    }
  }

  stage('Push Image') {
    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
      app.push('${env.BUILD_NUMBER}')
      app.push('latest')
    }
  }
}
