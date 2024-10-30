pipeline {
    agent any  // Executa em qualquer nó disponível

    stages {
        stage('Build') {
            steps {
                echo 'Executando Build...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Executando Testes...'
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Fazendo Deploy...'
            }
        }
    }

    node {
        stage('SCM') {
            checkout scm
        }
        stage('SonarQube Analysis') {
            def scannerHome = tool 'SonarScanner';
            withSonarQubeEnv() {
            sh "${scannerHome}/bin/sonar-scanner"
            }
        }
    }

    post {
        always {
            echo 'Pipeline concluído!'
        }
    }
}
