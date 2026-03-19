# NexaHost — High Performance Hosting Platform

![Version](https://img.shields.io/badge/version-1.2.0-00e5ff?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

> A modern, fully responsive hosting platform website built with vanilla HTML/CSS/JS. No frameworks, no dependencies — just clean, optimized code.

---

## 📸 Preview

![NexaHost Preview](https://via.placeholder.com/1200x600/080a0f/00e5ff?text=NexaHost+Preview)

---

## ✨ Features

- **Dark / Light mode** with localStorage persistence
- **Animated loader** on page load
- **Interactive Europe datacenter map** (SVG) with tooltips
- **Real-time price calculator** with sliders
- **Offer comparator** — side-by-side comparison table
- **3-step order tunnel** (config → account → payment)
- **Ping checker** with automatic IP detection
- **Client panel** with server metrics and invoices
- **Blog** with 9 articles
- **Promo code system**
- **Partners marquee** (infinite scroll)
- **Scroll reveal animations** via IntersectionObserver
- **Animated counters** on hero stats
- **Fully responsive** (mobile-first)
- **Accessible** (aria-labels, aria-expanded, roles)

---

## 🗂️ Project Structure

```
nexahost/
├── index.html              # Main landing page
├── order.html              # 3-step order tunnel
├── panel.html              # Fake client dashboard
├── blog.html               # Blog / articles
├── ping.html               # Datacenter ping checker
├── status.html             # Service status page
├── 404.html                # Custom error page
├── mentions-legales.html   # Legal notices (FR)
├── cgv.html                # Terms of service (FR)
├── style.css               # Global stylesheet (CSS variables)
├── script.js               # Vanilla JS — all interactions
├── robots.txt              # SEO crawler rules
├── sitemap.xml             # XML sitemap
└── README.md               # You are here
```

---

## 🚀 Getting Started

### Option 1 — Open directly
Just open `index.html` in your browser. No build step required.

### Option 2 — Live Server (VS Code)
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. Your site is live at `http://127.0.0.1:5500`

### Option 3 — Deploy to production
Upload all files to your web server via FTP or SSH:
```bash
scp -r ./nexahost/ user@yourserver.com:/var/www/html/
```

---

## 🎨 Customization

### Colors
All colors are defined as CSS variables in `style.css`:
```css
:root {
  --accent: #00e5ff;     /* Primary accent (cyan) */
  --accent2: #6d28d9;    /* Secondary accent (purple) */
  --bg: #080a0f;         /* Background */
  --card-bg: #111520;    /* Card background */
}
```

### Promo Codes
Edit the `PROMOS` object in `script.js`:
```js
const PROMOS = {
  'YOURCODE': { label: 'Your discount description' },
};
```

### Pricing
Update plan prices directly in the `.plan-option` data attributes in `order.html`.

---

## 🌍 Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Opera 76+ | ✅ Full |

---

## 📋 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history.

---

## 👥 Contributors

| Name | Role |
|------|------|
| **Alexandre Morel** | Lead Developer |
| **Lucas Fontaine** | UI/UX Designer |
| **Théo Bernard** | Frontend Developer |

---

## 📄 License

This project is licensed under the **MIT License** — see [LICENSE](./LICENSE) for details.

---

## 📬 Contact

- 🌐 Website: [nexahost.fr](https://nexahost.fr)
- 📧 Email: dev@nexahost.fr
- 💬 Discord: [discord.gg/nexahost](https://discord.gg/nexahost)
