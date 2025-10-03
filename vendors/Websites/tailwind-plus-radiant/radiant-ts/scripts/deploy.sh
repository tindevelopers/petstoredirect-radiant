#!/bin/bash

# Turborepo CI/CD Deployment Script
set -e

echo "🚀 Starting Turborepo CI/CD Pipeline..."

# Check if we're in the right directory
if [ ! -f "turbo.json" ]; then
  echo "❌ Error: turbo.json not found. Please run this script from the project root."
  exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run linting
echo "🔍 Running linting..."
npx turbo lint

# Run type checking
echo "🔧 Running type checking..."
npx turbo type-check

# Run tests (if any)
echo "🧪 Running tests..."
npx turbo test

# Build the project
echo "🏗️ Building project..."
npx turbo build

# Deploy to Vercel (if VERCEL_TOKEN is set)
if [ -n "$VERCEL_TOKEN" ]; then
  echo "🚀 Deploying to Vercel..."
  npx vercel --token $VERCEL_TOKEN --prod
else
  echo "⚠️ VERCEL_TOKEN not set. Skipping Vercel deployment."
fi

echo "✅ Turborepo CI/CD Pipeline completed successfully!"
