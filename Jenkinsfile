pipeline {
    agent {
        docker { image 'node:8.1.2' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}
