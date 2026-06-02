pipeline {
  agent any
  tools {
        nodejs 'node24'
    }
  options {
    timestamps()
  }

  stages {
    stage('Checkout') {
      steps {
                git branch: 'main',
                url: 'https://github.com/frdiskandr/belajar_jenskin.git'
            }
    }

    stage('Install') {
      steps {
        sh 'npm i'
      }
    }

    stage('Verify') {
      steps {
        sh 'npm run verify'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Smoke Test') {
      steps {
        sh 'npm run smoke'
      }
    }
  }
}
