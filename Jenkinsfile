pipeline {
  agent any

  tools {
    nodejs: 'node24'
  }

  options {
    timestamps()
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      steps {
        sh 'npm ci'
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
