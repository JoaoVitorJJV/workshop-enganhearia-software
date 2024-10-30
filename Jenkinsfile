pipeline {
    agent any  // Executa em qualquer nó disponível

    stages {
        stage('Build') {
            steps {
                echo 'Executando Build...'
                sh 'npm install'
            }
        }

        stage('SonarQube Analysis') {
            environment {
                scannerHome = tool 'SonarScanner'
            }
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
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


    post {
        always {
            echo 'Pipeline concluído!'
        }
    }
}
