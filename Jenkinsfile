pipeline {
    agent {
        docker { image 'node:14' }
    }
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/AbhishekHerbertSamuel/node-api.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-api .'
            }
        }
        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 3000:3000 node-api'
            }
        }
    }
}

