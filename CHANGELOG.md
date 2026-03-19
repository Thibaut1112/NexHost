# Changelog

All notable changes to NexaHost are documented in this file.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.2.0] — 2025-12-15

### Added
- Interactive SVG Europe datacenter map with hover tooltips
- Real-time price calculator with CPU/RAM/SSD sliders and option checkboxes
- Offer comparator — select up to 3 plans for side-by-side comparison
- 3-step order tunnel (config → account → payment) with URL param support
- Ping checker with automatic IP detection and datacenter recommendation
- Client panel with live server metrics, invoice list and PDF download buttons
- Blog page with 9 articles covering VPS, security, gaming and DevOps topics
- Custom 404 error page with animated terminal
- Promo code system (NEXA20, BIENVENUE, PRO10, GAME5)
- Partners infinite marquee (Linux, Docker, Kubernetes, NGINX, etc.)
- Animated page loader with NexaHost logo, spinner and progress bar
- "How it works" 3-step timeline section on homepage
- Service status page with 60-day uptime bars per datacenter
- `sitemap.xml` and `robots.txt` for SEO
- Full Open Graph and Twitter Card meta tags on all pages
- Inline SVG favicon

### Changed
- Navbar now includes direct links to Blog, Ping Checker and Status
- Footer updated with new pages (Blog, Ping, Panel)
- All `Commander` CTAs now link to `order.html`
- Improved scroll reveal stagger timing for better perceived performance

### Fixed
- CSS variable `--map-land` was missing in light theme
- FAQ accordion could open multiple items simultaneously
- Comparator table not resetting correctly when unchecking all options

---

## [1.1.0] — 2025-11-20

### Added
- Professional section with 3 enterprise plans (Business, Enterprise, Managed Cloud)
- Game Server tab (Mini, Clan, Réseau plans)
- S3 Object Storage tab (Basic, Pro, Max plans)
- Tab system for offer categories with animated reveal on switch
- Pro advantages grid (DDoS, dedicated support, monitoring, SLA)
- Contact form with dropdown request type selector
- `status.html` — service status page
- `mentions-legales.html` and `cgv.html` legal pages

### Changed
- VPS plans expanded from 3 to 4 (added Nano at €1.99/mo)
- Navbar redesigned with status indicator badge
- CSS fully refactored with minified variable naming

---

## [1.0.0] — 2025-10-01

### Added
- Initial release
- Hero section with animated server card widget
- VPS pricing cards (Starter, Pro, Power)
- FAQ accordion
- Contact form with promo code input
- Dark / light mode toggle with localStorage
- Mobile responsive navbar with burger menu
- Scroll reveal animations via IntersectionObserver
- Animated hero stat counters
- Europe datacenter cards (Paris, Frankfurt, Amsterdam)
- Footer with navigation and legal links
