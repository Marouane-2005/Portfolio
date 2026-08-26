# Setup & déploiement

## 1. Installer les dépendances

```bash
cd portfolio-site
npm install
```

## 2. Lancer en local

```bash
npm run dev
```

Ouvre http://localhost:3000

## 3. Déployer sur Vercel (gratuit)

**Option A — via GitHub (recommandé)**
1. Crée un repo GitHub (ex: `marouane-portfolio`) et pousse ce projet dedans :
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Marouane-2005/marouane-portfolio.git
   git push -u origin main
   ```
2. Va sur [vercel.com](https://vercel.com), connecte ton compte GitHub
3. Clique "Add New Project", sélectionne le repo → Deploy
4. Ton site sera en ligne sur `marouane-portfolio.vercel.app` (tu peux ajouter un domaine perso ensuite)

**Option B — via CLI**
```bash
npm install -g vercel
vercel
```

## 4. Ce qui est déjà en place

- ✅ Page **Home** complète : hero, flux d'alertes animé (signature), zones de focus, aperçu des projets, CTA contact
- ✅ Navigation + Footer partagés sur toutes les pages
- ✅ Système de design (couleurs, typographie) centralisé dans `src/app/globals.css`
- 🔧 Pages **About / Projects / Labs / Certifications / Resume** : structure créée, à remplir avec le contenu détaillé de chaque section (page "Coming soon" pour l'instant)

## 5. Prochaines étapes suggérées

1. Remplir la page `/projects` avec une carte détaillée par projet (Overview, Architecture, Technologies, Results) comme discuté
2. Ajouter tes vrais screenshots dans `public/` et les référencer dans les pages projets
3. Ajouter ton CV en PDF dans `public/cv.pdf` et lier le bouton "Download CV" dessus
4. Construire la page `/labs` avec le format Attack → Detection → Investigation → Response

## Structure du projet

```
src/
├── app/
│   ├── layout.tsx          # Layout global (nav, footer, polices)
│   ├── page.tsx             # Page Home
│   ├── globals.css          # Design system (couleurs, typo)
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── labs/page.tsx
│   ├── certifications/page.tsx
│   └── resume/page.tsx
└── components/
    ├── Nav.tsx
    ├── Footer.tsx
    └── AlertStream.tsx      # Élément signature (flux d'alertes animé)
```
