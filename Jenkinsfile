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

    post {
        always {
            echo 'Pipeline concluído!'
        }
    }
}
