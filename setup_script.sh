#!/bin/bash

# =============================================================================
# 🎨 LogoMaster AI - Setup Script Automatique
# =============================================================================
# Auteur: fullmeo
# Description: Setup complet du projet LogoMaster AI sur GitHub
# Usage: ./setup_script.sh
# =============================================================================

set -e  # Arrêt en cas d'erreur

# Couleurs pour output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

# Configuration du projet - CORRIGÉE POUR RÉPERTOIRE EXISTANT
PROJECT_NAME="LogoMasterAI"
GITHUB_USER="fullmeo"
PROJECT_DIR="/c/Users/diase/OneDrive/Musique/Documents/GitHub/LogoMasterAI"

echo -e "${PURPLE}
🎨 ====================================
   LogoMaster AI - Setup Automatique
=====================================${NC}"

# =============================================================================
# 1. VÉRIFICATION DU RÉPERTOIRE
# =============================================================================
echo -e "\n${BLUE}📁 Vérification répertoire...${NC}"

# Vérifier qu'on est dans le bon répertoire
if [[ "$PWD" != *"LogoMasterAI"* ]]; then
    echo -e "${RED}❌ Veuillez exécuter depuis le répertoire LogoMasterAI${NC}"
    echo -e "${YELLOW}Répertoire actuel: $PWD${NC}"
    echo -e "${YELLOW}Répertoire attendu: $PROJECT_DIR${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Répertoire correct détecté: $PWD${NC}"

# =============================================================================
# 2. CRÉATION DU RÉPERTOIRE PROJET
# =============================================================================
echo -e "\n${BLUE}📁 Création de la structure projet...${NC}"

# Créer le répertoire principal
mkdir -p "$PROJECT_DIR"
cd "$PROJECT_DIR"

# Structure de dossiers complète
mkdir -p {docs/{strategy,technical,design,api},prototypes/{screenshots,experiments},src/{frontend,backend,shared,ai},tests,deployment,.github/{workflows,ISSUE_TEMPLATE}}

echo -e "${GREEN}✅ Structure de dossiers créée${NC}"

# =============================================================================
# 3. FICHIERS DE CONFIGURATION GITHUB
# =============================================================================
echo -e "\n${BLUE}⚙️ Configuration GitHub...${NC}"

# .gitignore
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Production builds
.next/
out/
dist/
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
logs
*.log

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Temporary
tmp/
temp/

# API Keys (sécurité)
config/keys.js
secrets/
EOF

# README.md principal
cat > README.md << 'EOF'
# 🎨 LogoMaster AI

> AI-powered professional logo generator with dual MVP strategy

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-MVP%20Development-yellow.svg)
![Version](https://img.shields.io/badge/version-0.1.0-green.svg)

## 🚀 Quick Start

```bash
# Clone & install
git clone https://github.com/fullmeo/logomaster-ai.git
cd logomaster-ai
npm install

# Run development
npm run dev
```

## 📁 Project Structure

- **`/docs`** - Project documentation & strategy
- **`/prototypes`** - HTML prototypes & experiments  
- **`/src`** - Production source code
- **`/tests`** - Test suites

## 🎯 MVP Strategy

This project explores dual MVP approach:
1. **LogoMaster AI** - Professional B2B solution
2. **OctoLogo AI** - Community-driven with Pinky Poulpe

See [Strategy Analysis](docs/strategy/dual-mvp-analysis.md) for details.

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 + React 18 + TypeScript
- **Backend**: Next.js API + Supabase
- **AI**: OpenAI API + TensorFlow.js
- **Deploy**: Vercel + Cloudflare

## 📖 Documentation

- [Business Strategy](docs/strategy/)
- [Technical Architecture](docs/technical/)
- [Design System](docs/design/)
- [API Documentation](docs/api/)

## 🤝 Contributing

1. Fork the project
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---
Made with 💜 by [fullmeo](https://github.com/fullmeo)
EOF

# GitHub Actions CI/CD
cat > .github/workflows/ci.yml << 'EOF'
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
        
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build project
        run: npm run build

  deploy:
    if: github.ref == 'refs/heads/main'
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to Vercel
        run: echo "🚀 Deploy to production"
        # Configuration Vercel à ajouter
EOF

# Template d'issue pour features
cat > .github/ISSUE_TEMPLATE/feature.md << 'EOF'
---
name: Feature Request
about: Suggest a new feature for LogoMaster AI
title: '[FEATURE] '
labels: enhancement
---

## 🎯 Feature Description
Clear description of the feature

## 🤔 Problem it Solves
What user problem does this address?

## 💡 Proposed Solution
How should it work?

## 🎨 UI/UX Considerations
Mockups or wireframes if applicable

## 🔧 Technical Considerations
Implementation complexity, dependencies
EOF

# Template d'issue pour bugs
cat > .github/ISSUE_TEMPLATE/bug.md << 'EOF'
---
name: Bug Report
about: Create a report to help us improve
title: '[BUG] '
labels: bug
---

## 🐛 Bug Description
A clear description of what the bug is.

## 🔄 Steps to Reproduce
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

## ✅ Expected Behavior
What you expected to happen.

## 📱 Environment
- OS: [e.g. Windows 10, macOS]
- Browser: [e.g. Chrome, Safari]
- Version: [e.g. 22]

## 📸 Screenshots
If applicable, add screenshots.
EOF

# Template Pull Request
cat > .github/PULL_REQUEST_TEMPLATE.md << 'EOF'
## 🎯 Description
Brief description of changes

## 🔄 Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## 🧪 Testing
- [ ] Tests pass locally
- [ ] New tests added for features
- [ ] Manual testing completed

## 📝 Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
EOF

echo -e "${GREEN}✅ Configuration GitHub créée${NC}"

# =============================================================================
# 4. DOCUMENTATION INITIALE
# =============================================================================
echo -e "\n${BLUE}📚 Création documentation...${NC}"

# Documentation stratégie
cat > docs/strategy/dual-mvp-analysis.md << 'EOF'
# 📊 Analyse Dual MVP Strategy

## 🎯 Vue d'Ensemble

Ce document analyse la stratégie de développement de deux MVP en parallèle :
1. **LogoMaster AI** - Solution professionnelle B2B
2. **OctoLogo AI** - Approche communautaire avec Pinky Poulpe

## 🔍 Analyse Comparative

### LogoMaster AI
- **Cible** : Entrepreneurs, PME, freelances
- **Positionnement** : Solution premium professionnelle
- **Monétisation** : SaaS classique (freemium)

### OctoLogo AI  
- **Cible** : Développeurs, crypto community, early adopters
- **Positionnement** : Expérience unique, viral
- **Monétisation** : Tokens + marketplace

## 🎲 Recommandation

**APPROCHE SÉQUENTIELLE** :
1. Commencer par LogoMaster AI (6-8 semaines)
2. Ajouter éléments OctoLogo selon traction
3. Pivot possible vers full OctoLogo si viral

*Analyse complète disponible dans les prototypes HTML*
EOF

# Documentation technique
cat > docs/technical/architecture.md << 'EOF'
# 🛠️ Architecture Technique

## Stack Technologique

### Frontend
- **Framework** : Next.js 14 + React 18
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **State** : Zustand/Redux Toolkit

### Backend
- **Runtime** : Node.js 20
- **API** : Next.js API Routes
- **Database** : Supabase (PostgreSQL)
- **Auth** : Supabase Auth

### IA & Machine Learning
- **NLP** : OpenAI API (GPT-4)
- **Graphics** : Canvas API + SVG.js
- **ML Client** : TensorFlow.js
- **Color Science** : Color.js

### Infrastructure
- **Hosting** : Vercel
- **CDN** : Cloudflare
- **Storage** : AWS S3
- **Monitoring** : Vercel Analytics

## Algorithmes Cœur

### 1. Analyse Sémantique
```javascript
// Extraction concepts métier
const concepts = await extractConcepts(businessDescription)
const industry = await classifyIndustry(description)
const emotions = await extractTargetEmotions(description)
```

### 2. Génération SVG
```javascript
// Génération adaptative
const logo = generateLogo({
  concepts,
  industry, 
  constraints: { size, complexity, style }
})
```

### 3. Validation Qualité
```javascript
// Tests automatiques
const quality = await validateLogo(svgElement)
// Lisibilité, contraste, scalabilité, unicité
```

*Architecture détaillée dans tech_stack_analysis.html*
EOF

# License MIT
cat > LICENSE << 'EOF'
MIT License

Copyright (c) 2024 fullmeo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
EOF

echo -e "${GREEN}✅ Documentation créée${NC}"

# =============================================================================
# 5. FICHIERS DE MIGRATION
# =============================================================================
echo -e "\n${BLUE}📋 Création des placeholders pour migration...${NC}"

# Instructions migration
cat > prototypes/README.md << 'EOF'
# 🧪 Prototypes HTML

Ce dossier contient les prototypes HTML originaux à migrer vers React.

## 📁 Fichiers à Placer Ici

1. **logomaster_mvp.html** - MVP professionnel
2. **octologo_concept.html** - Concept Pinky Poulpe  
3. **creative_ai_embryo.html** - IA créative avancée
4. **tech_stack_analysis.html** - Analyse technique
5. **dual_mvp_strategy.html** - Stratégie comparative

## 🔄 Migration Plan

### Phase 1: Analyse
- [ ] Extraire composants réutilisables
- [ ] Identifier patterns UI communs
- [ ] Mapper fonctionnalités JavaScript

### Phase 2: Conversion React
- [ ] Créer composants de base
- [ ] Migrer logique métier
- [ ] Adapter styling Tailwind

### Phase 3: Intégration
- [ ] Connecter APIs
- [ ] Tests fonctionnels
- [ ] Optimisations performance

## 💡 Notes Migration

- Garder les HTML comme référence
- Documenter décisions de design
- Tester chaque conversion
- Maintenir UX identique
EOF

# Package.json pour Next.js
cat > package.json << 'EOF'
{
  "name": "logomaster-ai",
  "version": "0.1.0",
  "description": "AI-powered professional logo generator",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "test:watch": "jest --watch"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.0.0",
    "autoprefixer": "^10.0.0",
    "postcss": "^8.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "jest": "^29.0.0"
  },
  "keywords": [
    "ai",
    "logo",
    "generator",
    "design",
    "svg",
    "next.js"
  ],
  "author": "fullmeo",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/fullmeo/logomaster-ai.git"
  }
}
EOF

echo -e "${GREEN}✅ Fichiers de migration créés${NC}"

# =============================================================================
# 6. INITIALISATION GIT
# =============================================================================
echo -e "\n${BLUE}🔧 Initialisation Git...${NC}"

# Init Git
git init

# Configuration Git (si pas déjà fait)
echo -e "${YELLOW}⚠️ Vérification configuration Git...${NC}"
if ! git config --get user.name > /dev/null; then
    echo -e "${YELLOW}📝 Configuration Git utilisateur requise${NC}"
    echo -e "Exécutez manuellement :"
    echo -e "  ${BLUE}git config --global user.name \"Votre Nom\"${NC}"
    echo -e "  ${BLUE}git config --global user.email \"votre.email@example.com\"${NC}"
fi

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "🚀 Initial setup: LogoMaster AI project structure

✅ Created complete project structure
✅ Added GitHub configuration (Actions, templates)
✅ Setup documentation framework
✅ Added migration guidelines for HTML prototypes
✅ MIT License and comprehensive README

Ready for prototype migration and Next.js development."

echo -e "${GREEN}✅ Git initialisé avec commit initial${NC}"

# =============================================================================
# 7. INSTRUCTIONS FINALES
# =============================================================================
echo -e "\n${PURPLE}🎉 ====================================
   Setup Terminé avec Succès !
=====================================${NC}"

echo -e "\n${GREEN}✅ Répertoire créé :${NC} $PROJECT_DIR"
echo -e "${GREEN}✅ Structure complète :${NC} docs/, prototypes/, src/, tests/"
echo -e "${GREEN}✅ GitHub configuré :${NC} Actions, templates, README"
echo -e "${GREEN}✅ Git initialisé :${NC} Premier commit créé"

echo -e "\n${YELLOW}📋 ÉTAPES SUIVANTES :${NC}"
echo -e "1. ${BLUE}Créer repository GitHub :${NC}"
echo -e "   → Aller sur github.com/fullmeo"
echo -e "   → New repository : 'logomaster-ai'"
echo -e "   → Description: 'AI-powered logo generator with dual MVP strategy'"
echo -e "   → Public ✅"

echo -e "\n2. ${BLUE}Connecter au remote :${NC}"
echo -e "   cd $PROJECT_DIR"
echo -e "   git remote add origin https://github.com/fullmeo/logomaster-ai.git"
echo -e "   git branch -M main"
echo -e "   git push -u origin main"

echo -e "\n3. ${BLUE}Migrer vos prototypes :${NC}"
echo -e "   → Copier vos 5 fichiers HTML dans prototypes/"
echo -e "   → git add prototypes/ && git commit -m '✨ Add HTML prototypes'"
echo -e "   → git push"

echo -e "\n4. ${BLUE}Initialiser Next.js :${NC}"
echo -e "   → npx create-next-app@latest src/frontend --typescript --tailwind"
echo -e "   → Commencer migration React"

echo -e "\n${GREEN}🚀 Projet prêt pour le développement !${NC}"

# Ouvrir le répertoire (Windows)
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
    explorer "$PROJECT_DIR"
fi

echo -e "\n${BLUE}📁 Répertoire :${NC} $PROJECT_DIR"
echo -e "${BLUE}🌐 GitHub :${NC} https://github.com/fullmeo/logomaster-ai (à créer)"