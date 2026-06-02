# Belajar Jenkins dengan Node.js

Proyek ini adalah contoh sederhana untuk belajar CI/CD menggunakan Jenkins.

## Yang dipelajari

- Install dependency di pipeline
- Validasi sintaks Node.js
- Build artifact sederhana
- Smoke test ke endpoint `/health`

## Jalankan lokal

```bash
npm install
npm start
```

Buka:

- `http://127.0.0.1:3000/`
- `http://127.0.0.1:3000/health`

## Pipeline Jenkins

Pipeline didefinisikan di `Jenkinsfile` dan menjalankan:

1. `npm ci`
2. `npm run verify`
3. `npm run build`
4. `npm run smoke`
# belajar_jenskin
