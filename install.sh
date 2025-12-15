#!/bin/bash

echo "🌊 Route Book - Installation Script"
echo "===================================="
echo ""

# Check if node is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Installation complete!"
    echo ""
    echo "🚀 To start the development server, run:"
    echo "   npm run dev"
    echo ""
    echo "Then open http://localhost:3000 in your browser."
    echo ""
    echo "🌊 Enjoy your Ocean-themed Route Book!"
else
    echo ""
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi
