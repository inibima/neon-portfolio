# BIMA//NEON --- Full-Stack Developer Portfolio

Portfolio website personal dengan konsep **cyberpunk / neon
futuristic**, dibangun menggunakan **Next.js + React** sebagai frontend
dan **Python FastAPI** sebagai backend.

Project mendukung bahasa **Indonesia (ID)** dan **English (EN)**,
routing menggunakan Next.js App Router, REST API untuk data project dan
contact form, serta responsive layout untuk desktop dan mobile.

## Tech Stack

### Frontend

-   Next.js
-   React
-   JavaScript
-   CSS
-   Next.js App Router
-   Responsive design
-   Local Storage untuk pilihan bahasa

### Backend

-   Python
-   FastAPI
-   Uvicorn
-   REST API
-   CORS

### Tools

-   Visual Studio Code
-   Git
-   GitHub
-   Browser DevTools
-   Postman

## Struktur Project

``` text
neon-portfolio/
├── backend/
│   ├── .venv/
│   ├── main.py
│   ├── projects.py
│   ├── schemas.py
│   └── requirements.txt
│
├── frontend/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.jsx
│   │   ├── contact/
│   │   │   └── page.jsx
│   │   ├── projects/
│   │   │   └── page.jsx
│   │   ├── skills/
│   │   │   └── page.jsx
│   │   ├── globals.css
│   │   ├── layout.jsx
│   │   └── page.jsx
│   ├── data/
│   │   └── translations.js
│   ├── public/
│   │   └── images/
│   │       └── projects/
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

> Struktur dapat berkembang seiring pengembangan portfolio.

## Requirements

Pastikan sudah terpasang:

-   Node.js
-   npm
-   Python 3
-   Git
-   Visual Studio Code

Cek versi:

``` powershell
node --version
npm --version
python --version
git --version
```

# Menjalankan Backend

## 1. Masuk ke backend

Dari root project:

``` powershell
cd backend
```

## 2. Buat virtual environment

Jika `.venv` belum ada:

``` powershell
python -m venv .venv
```

## 3. Aktifkan virtual environment

Windows PowerShell:

``` powershell
.\.venv\Scripts\Activate.ps1
```

Jika berhasil, terminal akan memiliki prefix:

``` text
(.venv) PS ...\neon-portfolio\backend>
```

## 4. Install dependency

``` powershell
pip install -r requirements.txt
```

Cek dependency utama:

``` powershell
pip show fastapi
pip show uvicorn
```

## 5. Jalankan FastAPI

``` powershell
uvicorn main:app --reload
```

Backend biasanya tersedia di:

``` text
http://127.0.0.1:8000
```

Dokumentasi Swagger:

``` text
http://127.0.0.1:8000/docs
```

# Menjalankan Frontend

## 1. Buka terminal baru

Biarkan terminal backend tetap berjalan.

``` text
Terminal 1 → Backend
Terminal 2 → Frontend
```

## 2. Masuk ke frontend

``` powershell
cd frontend
```

## 3. Install dependency

Jika `node_modules` belum tersedia:

``` powershell
npm install
```

## 4. Jalankan Next.js

``` powershell
npm run dev
```

Frontend biasanya tersedia di:

``` text
http://localhost:3000
```

# Menjalankan Full-Stack

### Terminal 1 --- Backend

``` powershell
cd backend
.\.venv\Scripts\Activate.ps1
uvicorn main:app --reload
```

### Terminal 2 --- Frontend

``` powershell
cd frontend
npm run dev
```

Kemudian buka:

``` text
http://localhost:3000
```

Arsitektur:

``` text
Browser
   │
   ▼
Next.js Frontend
localhost:3000
   │
   │ REST API
   ▼
FastAPI Backend
127.0.0.1:8000
```

# Environment Variable

Frontend menggunakan:

``` text
NEXT_PUBLIC_API_URL
```

Buat file:

``` text
frontend/.env.local
```

Contoh:

``` env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

Frontend juga memiliki fallback ke:

``` text
http://127.0.0.1:8000
```

Jangan commit credential, password, API key, atau secret ke GitHub.

# API Endpoint

## Projects

Frontend mengambil data project melalui:

``` http
GET /projects
```

Local:

``` text
http://127.0.0.1:8000/projects
```

## Contact

Contact form mengirim data melalui:

``` http
POST /contact
```

Contoh payload:

``` json
{
  "name": "Nama",
  "email": "email@example.com",
  "message": "Pesan"
}
```

# CORS

Backend perlu mengizinkan origin frontend development:

``` text
http://localhost:3000
```

Jika frontend production menggunakan domain berbeda, konfigurasi CORS
backend harus disesuaikan.

# Routing

Project menggunakan Next.js App Router.

  Halaman    Route
  ---------- -------------
  Home       `/`
  About      `/about`
  Skills     `/skills`
  Projects   `/projects`
  Contact    `/contact`

Home saat ini tetap menampilkan **Hero + Journey**.

Halaman lainnya dikembangkan secara terpisah agar setiap bagian
portfolio memiliki halaman sendiri.

# Bahasa ID / EN

Portfolio mendukung:

``` text
ID
EN
```

Data translation berada di:

``` text
frontend/data/translations.js
```

Pilihan bahasa disimpan menggunakan Local Storage dengan key:

``` text
lang
```

Language switch tersedia di halaman agar pengguna tidak perlu kembali ke
Home hanya untuk mengganti bahasa.

# Responsive Navigation

Pada mobile, navigation menggunakan hamburger menu dan drawer.

Menu:

``` text
Home
About
Skills
Projects
Contact
```

Drawer muncul dari sisi kiri dan dapat ditutup melalui tombol close atau
ketika item menu dipilih.

Language switch tetap berada di luar drawer agar mudah digunakan.

# Testing

Workflow testing:

``` text
1. Jalankan backend
2. Jalankan frontend
3. Buka website
4. Test navigation
5. Test ID / EN
6. Test responsive desktop/mobile
7. Test Projects API
8. Test Contact API
9. Cek Browser DevTools
10. Perbaiki jika ada error
```

## Testing API dengan Swagger

Buka:

``` text
http://127.0.0.1:8000/docs
```

Gunakan Swagger untuk melihat dan menguji endpoint FastAPI.

## Testing API dengan Postman

### GET Projects

``` http
GET http://127.0.0.1:8000/projects
```

### POST Contact

``` http
POST http://127.0.0.1:8000/contact
```

Body → raw → JSON:

``` json
{
  "name": "Bima",
  "email": "bima@example.com",
  "message": "Testing contact API"
}
```

# Git Workflow

Setelah perubahan selesai dan sudah dites:

``` text
Edit
  ↓
Save
  ↓
Test
  ↓
Review Source Control
  ↓
Stage
  ↓
Commit
  ↓
Push
  ↓
GitHub
```

Contoh commit message:

``` text
add page routing for portfolio sections
```

Gunakan commit message yang singkat dan menjelaskan perubahan.

# Virtual Environment

Folder berikut adalah environment lokal:

``` text
backend/.venv/
```

Folder tersebut **tidak perlu di-push ke GitHub**.

Pastikan `.gitignore` memiliki:

``` gitignore
.venv/
```

Jika project dipindahkan ke folder atau komputer lain, `.venv` sebaiknya
dibuat ulang:

``` powershell
python -m venv .venv
```

Kemudian:

``` powershell
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

Virtual environment dapat menyimpan referensi path Python dari lokasi
sebelumnya. Karena itu, setelah project dipindahkan, membuat ulang
`.venv` merupakan langkah yang aman.

# Troubleshooting

## `uvicorn` tidak dikenali

Pastikan `.venv` aktif:

``` powershell
.\.venv\Scripts\Activate.ps1
```

Kemudian:

``` powershell
pip install -r requirements.txt
```

Cek:

``` powershell
pip show uvicorn
```

Lalu:

``` powershell
uvicorn main:app --reload
```

## Error setelah project dipindahkan

Jika `.venv` masih menunjuk ke lokasi lama:

``` powershell
deactivate
```

Hapus:

``` text
backend/.venv
```

Buat ulang:

``` powershell
python -m venv .venv
```

Aktifkan:

``` powershell
.\.venv\Scripts\Activate.ps1
```

Install dependency:

``` powershell
pip install -r requirements.txt
```

## Frontend tidak dapat mengakses backend

Cek backend:

``` text
http://127.0.0.1:8000/projects
```

Jika tidak dapat diakses, pastikan:

``` powershell
uvicorn main:app --reload
```

sedang berjalan.

Kemudian cek:

``` text
frontend/.env.local
```

dengan:

``` env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

Cek juga Console dan Network pada Browser DevTools.

## Port 3000 digunakan

Jika port `3000` sudah digunakan, perhatikan URL yang ditampilkan oleh:

``` powershell
npm run dev
```

Gunakan URL tersebut untuk membuka frontend.

# Production Checklist

Sebelum deployment:

-   [ ] Semua halaman dapat dibuka.
-   [ ] Navigation desktop berfungsi.
-   [ ] Drawer mobile berfungsi.
-   [ ] Drawer dapat ditutup.
-   [ ] Language switch ID/EN berfungsi.
-   [ ] Pilihan bahasa tetap tersimpan saat berpindah halaman.
-   [ ] Projects API berfungsi.
-   [ ] Contact API berfungsi.
-   [ ] CORS production sudah benar.
-   [ ] Environment variable production sudah dikonfigurasi.
-   [ ] Tidak ada secret di repository.
-   [ ] `.venv` tidak masuk Git.
-   [ ] Responsive layout sudah diuji.
-   [ ] Perubahan sudah di-commit dan di-push.

# Project Goal

BIMA//NEON dibuat sebagai portfolio Full-Stack Developer untuk
menampilkan kemampuan dalam:

-   React
-   Next.js
-   Vue.js
-   Python
-   FastAPI
-   PHP
-   REST API
-   Responsive Web Development
-   Git dan GitHub

Project juga digunakan untuk mendokumentasikan perjalanan pengembangan,
implementasi fitur, serta project yang telah dibuat.

## License

Project ini merupakan portfolio personal.

Konten, desain, dan implementasi di dalam repository digunakan untuk
kebutuhan portfolio dan pembelajaran.
