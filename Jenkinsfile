pipeline {
    agent any

    stages {
        stage('Fetch Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/JoaoVitorJJV/workshop-enganhearia-software'
            }
        }
        stage('Code Analysis') {
            environment {
                scannerHome = tool 'Sonar'
            }
            steps {
                script {
                    withSonarQubeEnv('Sonar') {
                        sh "${scannerHome}/bin/sonar-scanner \
                            -Dsonar.projectKey=JoaoVitorJJV_workshop-enganhearia-software_0dc54c20-8c82-4768-9052-66ea94aa80d7 \
                            -Dsonar.projectName=workshop-enganhearia-software \
                            -Dsonar.projectVersion=1.0.0 \
                            -Dsonar.sources=. "
                    }
                }
            }
        }
    }
}