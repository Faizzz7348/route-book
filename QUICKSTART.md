# ⚡ Quick Start Guide

## 🚀 Instalasi & Menjalankan (3 Langkah)

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Development Server
```bash
npm run dev
```

### 3. Buka Browser
```
http://localhost:3000
```

**Selesai!** Sidebar dengan tema Ocean sudah berjalan! 🌊

---

## 📋 Checklist

Setelah `npm install` selesai, cek apakah dependencies berikut ter-install:

### ✅ Core Framework
- [x] next
- [x] react
- [x] react-dom

### ✅ UI Components
- [x] @radix-ui/react-slot
- [x] @radix-ui/react-separator
- [x] @radix-ui/react-tooltip
- [x] lucide-react

### ✅ Styling
- [x] tailwindcss
- [x] tailwindcss-animate
- [x] class-variance-authority
- [x] clsx
- [x] tailwind-merge

### ✅ Development
- [x] typescript
- [x] @types/node
- [x] @types/react
- [x] @types/react-dom
- [x] eslint
- [x] eslint-config-next
- [x] autoprefixer

---

## 🎯 Fitur Sidebar

### Yang Bisa Dicoba:
1. **Toggle Sidebar**: Klik tombol di header untuk expand/collapse
2. **Icon Mode**: Sidebar collapsed menampilkan hanya icon dengan tooltip
3. **Search**: Ketik di search box untuk filter menu
4. **Nested Menu**: Klik "Route" atau "Calendar" untuk expand submenu
5. **Navigation**: Klik menu item untuk pindah halaman
6. **Responsive**: Resize window untuk lihat mode mobile

---

## 🌊 Halaman yang Tersedia

| URL | Halaman | Deskripsi |
|-----|---------|-----------|
| `/` | Home | Dashboard dengan cards |
| `/routes/kl3` | KL 3 | Table route KL 3 |
| `/routes/kl4` | KL 4 | Table route KL 4 |
| `/calendar/rooster` | Rooster | Upcoming events |
| `/calendar/expired` | Expired | Past events |

---

## 🎨 Theme Preview

Warna Ocean dari RasEngSN:
- **Background**: Deep ocean blue (#0a1929)
- **Sidebar**: Medium dark (#132f4c)
- **Accent**: Bright cyan (#4fc3f7)
- **Text**: Light blue (#e3f2fd)

---

## 🐛 Troubleshooting

### Error: Port 3000 sudah digunakan
```bash
npm run dev -- -p 3001
```

### Error: Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error: TypeScript errors
```bash
npm run build
```

---

## 📚 Dokumentasi Lengkap

- **README.md** - Overview proyek
- **INSTALL.md** - Panduan instalasi detail
- **FEATURES.md** - Detail semua fitur
- **PROJECT_STRUCTURE.md** - Struktur file
- **PROJECT_COMPLETE.md** - Ringkasan proyek

---

## 💡 Tips

- **Hot Reload**: Edit file apa pun dan lihat perubahan langsung
- **Console**: Buka DevTools untuk lihat log
- **Errors**: Terminal akan menampilkan error jika ada
- **Build**: Gunakan `npm run build` untuk production

---

**Happy Coding! 🚀🌊**
