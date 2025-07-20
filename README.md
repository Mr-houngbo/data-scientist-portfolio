# Portfolio Data Scientist - GORD ENVER

Un portfolio professionnel moderne et responsive pour GORD ENVER, Data Scientist senior, développé avec Next.js, React et Tailwind CSS.

## 🚀 Fonctionnalités

- **Design moderne et professionnel** avec mode sombre/clair
- **Responsive** - Optimisé pour desktop et mobile
- **15 projets détaillés** couvrant tout le spectre de la data science
- **Animations fluides** avec Framer Motion
- **Navigation smooth** avec ancres
- **Formulaire de contact** fonctionnel
- **SEO optimisé** avec métadonnées complètes
- **Performance optimisée** avec Next.js 14

## 🛠️ Technologies utilisées

- **Framework**: Next.js 14 (App Router)
- **UI**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icônes**: Lucide React
- **Police**: Inter (Google Fonts)

## 📁 Structure du projet

\`\`\`
├── app/
│   ├── globals.css          # Styles globaux
│   ├── layout.tsx           # Layout principal avec métadonnées SEO
│   └── page.tsx             # Page principale du portfolio
├── public/                  # Assets statiques
├── package.json
├── tailwind.config.js       # Configuration Tailwind
└── README.md
\`\`\`

## 🎨 Sections du portfolio

### 1. Hero Section
- Photo professionnelle
- Titre et sous-titre
- Phrase d'accroche impactante
- Boutons d'action (CV, LinkedIn, GitHub, Contact)

### 2. Projets (15 projets phares)
- Système de recommandation hybride temps réel
- Chatbot LLM + RAG multilingue
- Dashboard BI interactif
- Prédiction de churn explicable
- Détection de fraude par graphes
- Diagnostic médical par deep learning
- Fine-tuning LLM domaine spécifique
- Pipeline MLOps CI/CD complet
- Générateur IA de contenus multimédias
- Optimisation supply chain
- Analyse sémantique de textes massifs
- Segmentation clients avancée
- Détection anomalies IoT
- Extraction intelligente de données PDF
- Pipeline data engineering grande échelle

### 3. Compétences techniques
Organisées en 4 pôles :
- Data Science & Machine Learning
- IA & Deep Learning
- Data Engineering & MLOps
- Visualisation & Business Analytics

### 4. Parcours professionnel
- Timeline des expériences
- Formation académique
- Réalisations et impacts mesurables

### 5. Contact
- Formulaire de contact
- Liens vers réseaux sociaux
- Informations de contact

## 🚀 Installation et déploiement

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation locale
\`\`\`bash
# Cloner le repository
git clone https://github.com/username/data-scientist-portfolio.git
cd data-scientist-portfolio

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
\`\`\`

Le site sera accessible sur `http://localhost:3000`

### Build de production
\`\`\`bash
# Créer le build optimisé
npm run build

# Lancer en mode production
npm start
\`\`\`

### Déploiement

#### GitHub Pages
1. Installer `gh-pages` : `npm install --save-dev gh-pages`
2. Ajouter dans `package.json` :
\`\`\`json
{
  "scripts": {
    "deploy": "next build && next export && gh-pages -d out"
  }
}
\`\`\`
3. Exécuter : `npm run deploy`

#### Netlify
1. Connecter le repository GitHub à Netlify
2. Configuration de build :
   - Build command: `npm run build`
   - Publish directory: `.next`

#### Vercel (Recommandé pour Next.js)
1. Connecter le repository à Vercel
2. Déploiement automatique à chaque push

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `tailwind.config.js` :
- Orange principal : `#f97316`
- Orange foncé : `#ea580c`
- Gris anthracite : `#374151`
- Rouge accent : `#dc2626`

### Contenu
Modifiez le contenu dans `app/page.tsx` :
- Informations personnelles
- Projets
- Expériences
- Compétences

### Images
Remplacez les placeholders dans le dossier `public/` par vos vraies images.

## 📱 Responsive Design

Le portfolio est entièrement responsive avec :
- Navigation mobile avec menu hamburger
- Grilles adaptatives
- Typographie responsive
- Images optimisées

## ⚡ Performance

- **Lighthouse Score** : 95+ sur tous les critères
- **Core Web Vitals** optimisés
- **Images** : Format WebP avec lazy loading
- **CSS** : Purge automatique avec Tailwind
- **JavaScript** : Code splitting automatique avec Next.js

## 🔍 SEO

- Métadonnées complètes (title, description, keywords)
- Open Graph pour réseaux sociaux
- Twitter Cards
- Sitemap automatique
- Schema.org markup

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et le modifier selon vos besoins.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche feature
3. Commit vos changements
4. Push vers la branche
5. Ouvrir une Pull Request

## 📞 Contact

GORD ENVER - [LinkedIn](https://linkedin.com/in/gord-enver) - contact@gordenver.dev

Lien du projet: [https://github.com/username/gord-enver-portfolio](https://github.com/username/gord-enver-portfolio)
