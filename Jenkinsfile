pipeline {
    agent any

    tools {
        nodejs 'latest'
    }

    stages {
        stage('Test') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
}
