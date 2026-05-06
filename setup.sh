#!/bin/bash

echo "🚀 Setting up MedLog System..."

# Create folders
mkdir -p server client

# ----------------------
# BACKEND SETUP
# ----------------------
cd server
npm init -y

npm install express mongoose cors dotenv jsonwebtoken bcrypt multer socket.io helmet express-rate-limit

echo "📦 Backend dependencies installed"

# Create structure
mkdir models routes middleware utils
touch server.js socket.js .env

cd ..

# ----------------------
# FRONTEND SETUP
# ----------------------
npm create vite@latest client -- --template react
cd client

npm install
npm install axios recharts socket.io-client jspdf

# Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

echo "🎨 Frontend setup complete"

cd ..

# ----------------------
# GIT INIT
# ----------------------
git init
git add .
git commit -m "Initial MedLog system setup"

echo "✅ Setup complete!"
echo "➡️ Next: configure .env and run servers" 