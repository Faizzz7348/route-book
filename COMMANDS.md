# 🛠️ Useful Commands

## Development

### Start Development Server
```bash
npm run dev
```
Menjalankan server di http://localhost:3000 dengan hot reload.

### Start on Different Port
```bash
npm run dev -- -p 3001
```
Menjalankan server di port lain jika 3000 sudah digunakan.

---

## Build & Production

### Build for Production
```bash
npm run build
```
Membuat optimized production build di folder `.next/`.

### Start Production Server
```bash
npm start
```
Menjalankan production server (harus build dulu).

### Build and Start
```bash
npm run build && npm start
```
Build dan langsung jalankan production server.

---

## Code Quality

### Run ESLint
```bash
npm run lint
```
Cek code quality dan potential issues.

### Fix ESLint Issues
```bash
npm run lint -- --fix
```
Auto-fix masalah yang bisa diperbaiki otomatis.

---

## Package Management

### Install Dependencies
```bash
npm install
```
Install semua dependencies dari package.json.

### Install Specific Package
```bash
npm install nama-package
```
Install package baru dan tambahkan ke dependencies.

### Install Dev Dependency
```bash
npm install -D nama-package
```
Install package untuk development saja.

### Update All Packages
```bash
npm update
```
Update semua packages ke versi terbaru (sesuai semver).

### Check Outdated Packages
```bash
npm outdated
```
Lihat packages yang ada versi lebih baru.

### Remove Package
```bash
npm uninstall nama-package
```
Hapus package dari project.

---

## Clean & Reset

### Clean Install
```bash
rm -rf node_modules package-lock.json
npm install
```
Hapus dan install ulang semua dependencies.

### Clean Build
```bash
rm -rf .next
npm run build
```
Hapus build cache dan build ulang.

### Clean All
```bash
rm -rf node_modules .next package-lock.json
npm install
```
Reset total project ke fresh install.

---

## Git Commands

### Initial Commit
```bash
git init
git add .
git commit -m "Initial commit: Route Book with sidebar"
```

### Add Remote
```bash
git remote add origin YOUR_REPO_URL
git branch -M main
git push -u origin main
```

### Commit Changes
```bash
git add .
git commit -m "Your commit message"
git push
```

---

## Next.js Specific

### Clear Cache
```bash
rm -rf .next/cache
```
Hapus Next.js build cache.

### Generate Static Export
```bash
npm run build
```
Next.js 15 tidak lagi support `next export`, gunakan output config.

### Analyze Bundle
Install analyzer:
```bash
npm install -D @next/bundle-analyzer
```

Update next.config.ts:
```typescript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // your config
})
```

Run analysis:
```bash
ANALYZE=true npm run build
```

---

## TypeScript

### Type Check
```bash
npx tsc --noEmit
```
Cek TypeScript errors tanpa compile.

### Generate Types
```bash
npm run build
```
Next.js auto-generate types saat build.

---

## Debugging

### Run with Debugging
```bash
NODE_OPTIONS='--inspect' npm run dev
```
Jalankan dengan Node.js debugger.

### Check Environment
```bash
node --version
npm --version
```
Cek versi Node.js dan npm.

---

## Tailwind CSS

### Rebuild Tailwind
Tailwind JIT akan auto-rebuild, tapi jika perlu manual:
```bash
npx tailwindcss -i ./app/globals.css -o ./output.css --watch
```

### Optimize for Production
Sudah automatic di `npm run build`, tapi config ada di tailwind.config.ts:
```typescript
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  // Tailwind akan purge unused classes
}
```

---

## Scripts dari package.json

```json
{
  "scripts": {
    "dev": "next dev",       // Development server
    "build": "next build",   // Production build
    "start": "next start",   // Production server
    "lint": "next lint"      // ESLint check
  }
}
```

---

## Useful Shortcuts

### Terminal Shortcuts
- `Ctrl + C` - Stop server
- `Ctrl + L` - Clear terminal
- `Ctrl + R` - Search command history

### Browser Shortcuts
- `Ctrl/Cmd + R` - Reload page
- `Ctrl/Cmd + Shift + R` - Hard reload
- `F12` - Open DevTools

---

## Environment Variables

### Create .env.local
```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000
DATABASE_URL=your_database_url
SECRET_KEY=your_secret_key
```

### Use in Code
```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const secret = process.env.SECRET_KEY;
```

**Note**: Variables dengan prefix `NEXT_PUBLIC_` bisa diakses di browser.

---

## Performance Testing

### Lighthouse
Buka Chrome DevTools → Lighthouse → Generate report

### Web Vitals
Next.js sudah include Web Vitals monitoring.

Check console untuk metrics:
- FCP (First Contentful Paint)
- LCP (Largest Contentful Paint)
- CLS (Cumulative Layout Shift)
- FID (First Input Delay)
- TTFB (Time to First Byte)

---

## Quick Fixes

### Port Already in Use
```bash
# Find process using port 3000
lsof -ti:3000

# Kill process
kill -9 $(lsof -ti:3000)

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found
```bash
npm install
```

### Weird Behavior
```bash
rm -rf .next node_modules
npm install
npm run dev
```

---

**Save this file untuk referensi cepat! 📚**
