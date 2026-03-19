# NexaHost 🚀

![Version](https://img.shields.io/badge/version-2.0.0-00e5ff?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

> Site vitrine d'hébergement VPS & serveurs dédiés — construit en HTML/CSS/JS vanilla, sans framework ni dépendance externe.

---

## ✨ Fonctionnalités

- 🌙 **Dark / Light mode** avec persistance localStorage
- ⚡ **Loader animé** sur toutes les pages
- 🗺️ **Carte SVG Europe interactive** avec tooltips datacenter
- 🧮 **Calculateur de prix** temps réel (sliders CPU/RAM/SSD)
- 📊 **Comparateur d'offres** — tableau côte à côte (max 3)
- 🛒 **Tunnel de commande** en 3 étapes (config → compte → paiement)
- 📡 **Ping Checker** avec détection IP automatique
- 🖥️ **Panel client fictif** avec métriques serveur et factures
- 📝 **Blog** avec 9 articles hébergement
- 📈 **Page statut** avec barres d'uptime 60 jours
- 🎁 **Codes promo** (NEXA20, BIENVENUE, PRO10, GAME5)
- 📱 **Responsive** mobile-first
- ♿ **Accessible** (aria-labels, aria-expanded)

---

## 🗂️ Structure

```
nexahost/
├── index.html            # Page principale
├── order.html            # Tunnel de commande
├── panel.html            # Espace client
├── blog.html             # Articles & guides
├── ping.html             # Ping checker
├── status.html           # Statut des services
├── 404.html              # Page d'erreur
├── mentions-legales.html # Mentions légales
├── cgv.html              # CGV
├── style.css             # CSS global (variables)
├── script.js             # JS vanilla
├── robots.txt            # SEO
└── sitemap.xml           # Sitemap XML
```

---

## 🚀 Lancer le projet

### Option 1 — Live Server (VS Code)
1. Installer l'extension **Live Server**
2. Clic droit sur `index.html` → **Open with Live Server**
3. Site accessible sur `http://127.0.0.1:5500`

### Option 2 — Navigateur direct
Ouvrir `index.html` directement dans le navigateur.

### Option 3 — Déploiement FTP
```bash
scp -r ./nexahost/ user@monserveur.com:/var/www/html/
```

---

## 🎨 Personnalisation

### Couleurs (style.css)
```css
:root {
  --accent: #00e5ff;   /* Cyan principal */
  --bg:     #080a0f;   /* Fond dark */
  --card:   #111520;   /* Fond cartes */
}
```

### Codes promo (script.js)
```js
var PROMOS = {
  'MONCODE': 'Description de la réduction 🎉',
};
```

---

## 🌍 Compatibilité navigateurs

| Navigateur | Support |
|------------|---------|
| Chrome 90+ | ✅ |
| Firefox 88+ | ✅ |
| Safari 14+ | ✅ |
| Edge 90+ | ✅ |

---

## 👥 Équipe

| Nom | Rôle |
|-----|------|
| **Rachid** | Lead Developer |
| **rachid** | UI/UX Designer |
| **Rachid** | Frontend Developer |

---

## 📄 Licence

MIT — voir [LICENSE](./LICENSE)
