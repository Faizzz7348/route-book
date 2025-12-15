## Installation Instructions

### Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Go to http://localhost:3000

### Alternative: Use the install script (Linux/Mac)

```bash
chmod +x install.sh
./install.sh
```

### Dependencies

The following packages will be installed:

**Core:**
- next (^15.1.0)
- react (^19.0.0)
- react-dom (^19.0.0)

**UI Components:**
- @radix-ui/react-slot (^1.1.0)
- @radix-ui/react-separator (^1.1.0)
- @radix-ui/react-tooltip (^1.1.8)
- lucide-react (^0.462.0)

**Styling:**
- tailwindcss (^3.4.1)
- tailwindcss-animate (^1.0.7)
- class-variance-authority (^0.7.1)
- clsx (^2.1.1)
- tailwind-merge (^2.5.5)

**Development:**
- typescript (^5)
- @types/node (^20)
- @types/react (^19)
- @types/react-dom (^19)
- eslint (^9)
- eslint-config-next (^15.1.0)

### Troubleshooting

**Issue: Port 3000 already in use**
```bash
# Use a different port
npm run dev -- -p 3001
```

**Issue: Module not found errors**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

**Issue: TypeScript errors**
```bash
# Rebuild TypeScript
npm run build
```

### Building for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

### Development Tips

- Hot reload is enabled by default
- Edit any file and see changes instantly
- Check the terminal for any errors
- Open browser DevTools to see console logs

Enjoy! 🌊
