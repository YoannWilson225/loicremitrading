# 🚀 Loïc Rémy Trading - Landing Page

Landing page professionnelle pour **Loïc Rémy Trading**, une plateforme de formation en trading avec plus de 1000 étudiants formés.

## 📋 Fonctionnalités

- ✨ Design moderne et responsive
- 🌓 Mode sombre / Mode clair avec persistance
- 🎨 Charte graphique avec les couleurs #005CD9 (bleu) et #F41213 (rouge)
- 📱 Optimisé pour mobile, tablette et desktop
- ⚡ Performances optimisées avec Next.js 15
- 🎯 Sections complètes :
  - Hero avec présentation
  - À propos de Loïc Rémy Yao
  - Statistiques
  - 4 formations détaillées
  - Call-to-Action
  - Footer avec liens de contact

## 🛠️ Technologies utilisées

- **Next.js 15.5.6** - Framework React
- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS 4** - Framework CSS utilitaire
- **Context API** - Gestion d'état pour le thème

## 🚀 Installation

```bash
# Cloner le projet
git clone <url-du-repo>
cd loicremitrading

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du projet

```
loicremitrading/
├── public/
│   └── assets/          # Images (logos, photo Loïc Rémy)
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Layout principal avec ThemeProvider
│   │   ├── page.tsx     # Page d'accueil
│   │   └── globals.css  # Styles globaux
│   ├── components/
│   │   ├── Navbar.tsx   # Navigation avec toggle thème
│   │   ├── Hero.tsx     # Section héro
│   │   ├── About.tsx    # À propos
│   │   ├── Stats.tsx    # Statistiques
│   │   ├── Formations.tsx # Cartes des formations
│   │   ├── CTA.tsx      # Call-to-action
│   │   ├── Footer.tsx   # Pied de page
│   │   └── ThemeToggle.tsx # Bouton toggle thème
│   └── contexts/
│       └── ThemeContext.tsx # Context pour le thème
└── package.json
```

## 🎨 Formations disponibles

1. **Formation Vidéo Préenregistrée** - 99€
   - Pour débutants
   - Accès illimité aux vidéos
   - Communauté LRT Académie

2. **Formation Vidéo + Coaching** - 199€
   - Coaching personnalisé
   - Zooms après chaque module
   - Suivi individuel

3. **Formation Complète Pro** - 299€ / 359€
   - Du débutant à l'expert
   - One-to-one en live
   - 3 mois groupe premium

4. **Coaching Privé SMC** - 699€
   - Pour traders avancés
   - Mentorat exclusif
   - Programme intensif

## 🌐 Déploiement

### Vercel (Recommandé)

```bash
npm run build
vercel deploy
```

### Autres plateformes

```bash
npm run build
npm start
```

## 👨‍💼 À propos

**Loïc Rémy Yao** (Yao Cyrille Romaric), CEO de LOÏC RÉMY TRADING, est un trader expérimenté avec 5 ans d'expérience. Il a formé plus de 1000 traders avec une approche basée sur la simplicité et la maîtrise des fondamentaux.

## 📞 Contact

- Email: contact@loicremytrading.com
- Horaires: 9:00 – 20:00 GMT
- WhatsApp: Disponible sur le site

## 📄 Licence

© 2025 Loïc Rémy Trading. Tous droits réservés.

---

Développé avec ❤️ pour la communauté des traders
