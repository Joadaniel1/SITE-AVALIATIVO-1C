/* ========================================
   DESIGN SYSTEM - VARIÁVEIS CSS (ROOT)
   ======================================== */
/* ALTERE AQUI AS CORES PRIMÁRIAS */
:root {
  /* Cores */
  --color-primary: #6F4E37;      /* Marrom café principal */
  --color-primary-dark: #4A3728;
  --color-secondary: #D4A574;     /* Bege dourado */
  --color-accent: #F4E4BC;        /* Creme claro */
  --color-background: #F8F5F0;    /* Fundo neutro */
  --color-text: #2D1B14;          /* Texto escuro */
  --color-light: #FFFFFF;
  
  /* Alto Contraste */
  --color-hc-bg: #000000;
  --color-hc-text: #FFFFFF;
  --color-hc-primary: #FFFF00;
  --color-hc-secondary: #FFA500;
  
  /* Tipografia */
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-size-base: 1rem;
  --font-size-sm: 0.875rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.5rem;
  --font-size-2xl: 2.25rem;
  --font-size-3xl: 3rem;
  
  /* Espaçamentos */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 4rem;
  
  /* Layout */
  --radius: 0.75rem;              /* ALTERE AQUI O ARREDONDAMENTO */
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  
  /* ========================================
     ALTERE AQUI O GRID TEMPLATE (abaixo)
     ======================================== */
  --grid-cards: repeat(auto-fit, minmax(300px, 1fr));
}

/* ========================================
   BASE STYLES
   ======================================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-background);
  transition: all 0.3s ease;
  overflow-x: hidden;
}

body.high-contrast {
  background-color: var(--color-hc-bg) !important;
  color: var(--color-hc-text) !important;
}

/* ========================================
   LAYOUT RESPONSIVO - MOBILE FIRST
   ======================================== */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

/* ========================================
   CONTROLES DE ACESSIBILIDADE
   ======================================== */
.accessibility-controls {
  position: fixed;
  top: var(--space-md);
  right: var(--space-md);
  z-index: 1000;
  display: flex;
  gap: var(--space-xs);
  background: var(--color-light);
  padding: var(--space-sm);
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
  border: 2px solid var(--color-primary);
}

.accessibility-btn {
  padding: var(--space-xs) var(--space-sm);
  background: var(--color-primary);
  color: var(--color-light);
  border: none;
  border-radius: calc(var(--radius) / 2);
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.accessibility-btn:hover,
.accessibility-btn:focus {
  background: var(--color-primary-dark);
  transform: scale(1.05);
  outline: 2px solid var(--color-secondary);
  outline-offset: 2px;
}

body.high-contrast .accessibility-btn {
  background: var(--color-hc-primary);
  color: var(--color-hc-bg);
}

/* ========================================
   HEADER E NAVEGAÇÃO
   ======================================== */
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 999;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-sm) var(--space-md);
  max-width: 1200px;
  margin: 0 auto;
}

.nav-brand h1 a {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: var(--space-lg);
}

.nav-menu a {
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius);
  transition: all 0.2s ease;
}

.nav-menu a:hover,
.nav-menu a:focus {
  background: var(--color-accent);
  color: var(--color-primary);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-sm);
  gap: 4px;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--color-primary);
  transition: all 0.3s ease;
}

/* ========================================
   HERO SECTION
   ======================================== */
.hero {
  height: 100vh;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--color-light);
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 600px;
  padding: var(--space-xl);
  animation: fadeInUp 1s ease-out;
}

.hero-title {
  font-size: clamp(var(--font-size-2xl), 5vw, var(--font-size-3xl));
  font-weight: 700;
  margin-bottom: var(--space-lg);
}

.hero-subtitle {
  font-size: var(--font-size-lg);
  margin-bottom: var(--space-xl);
  opacity: 0.9;
}

.cta-button {
  background: var(--color-light);
  color: var(--color-primary);
  padding: var(--space-lg) var(--space-2xl);
  font-size: var(--font-size-lg);
  font-weight: 600;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.cta-button:hover,
.cta-button:focus {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
  background: var(--color-accent);
}

/* ========================================
   SEÇÕES COMUNS
   ======================================== */
section {
  padding: var(--space-2xl) 0;
}

h2 {
  font-size: clamp(var(--font-size-xl), 4vw, var(--font-size-2xl));
  text-align: center;
  margin-bottom: var(--space-2xl);
  font-weight: 600;
}

/* ========================================
   ABOUT SECTION - FLEXBOX
   ======================================== */
.about-content {
  display: grid;
  /* ALTERE AQUI: --grid-cards no :root */
  grid-template-columns: var(--grid-cards);
  gap: var(--space-xl);
  max-width: 1200px;
  margin: 0 auto;
}

.about-card {
  background: var(--color-light);
  padding: var(--space-xl);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

/* ========================================
   MENU - ABA SYSTEM
   ======================================== */
.menu-section {
  background: var(--color-accent);
}

.tabs-container {
  display: flex;
  justify-content: center;
  margin-bottom: var(--space-xl);
  gap: var(--space-sm);
  flex-wrap: wrap;
}

.tab-button {
  padding: var(--space-md) var(--space-xl);
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  border-radius: var(--radius);
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tab-button.active,
.tab-button:hover,
.tab-button:focus {
  background: var(--color-primary);
  color: var(--color-light);
}

.tab-panel {
  display: none;
}

.tab-panel.active {
  display: block;
  animation: fadeIn 0.5s ease-out;
}

.menu-grid {
  /* ALTERE AQUI: grid-template-columns */
  display: grid;
  grid-template-columns: var(--grid-cards);
  gap: var(--space-lg);
}

.menu-card {
  background: var(--color-light);
  padding: var(--space-lg);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.menu-price {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-primary);
}

/* ========================================
   CARROSSEL DE EVENTOS
   ======================================== */
.carousel-container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: var(--radius);
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
  scroll-snap-type: x mandatory;
}

.carousel-slide {
  min-width: 100%;
  padding: var(--space-xl);
  background: var(--color-light);
  box-shadow: var(--shadow);
  flex-shrink: 0;
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.6s ease;
}

.carousel-prev,
.carousel-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--color-primary);
  color: var(--color-light);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  font-size: var(--font-size-lg);
  transition: all 0.3s ease;
  z-index: 10;
}

.carousel-prev {
  left: var(--space-md);
}

.carousel-next {
  right: var(--space-md);
}

.carousel-prev:hover,
.carousel-next:hover {
  background: var(--color-primary-dark);
  transform: translateY(-50%) scale(1.1);
}

.carousel-dots {
  display: flex;
  justify-content: 50%;
  gap: var(--space-sm);
  margin-top: var(--space-lg);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-accent);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: var(--color-primary);
  transform: scale(1.2);
}

/* ========================================
   CONTACT
   ======================================== */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  max-width: 1000px;
  margin: 0 auto;
}

.contact-info {
  background: var(--color-light);
  padding: var(--space-xl);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.contact-form label {
  font-weight: 500;
  color: var(--color-primary);
}

.contact-form input,
.contact-form textarea {
  padding: var(--space-md);
  border: 2px solid #e2e8f0;
  border-radius: var(--radius);
  font-family: inherit;
  font-size: var(--font-size-base);
  transition: border-color 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

/* ========================================
   FOOTER
   ======================================== */
.footer {
  background: var(--color-primary);
  color: var(--color-light);
  text-align: center;
  padding: var(--space-lg);
}

/* ========================================
   RESPONSIVO - TABLET E DESKTOP
   ======================================== */
@media (min-width: 768px) {
  .menu-toggle {
    display: none;
  }
  
  .nav-menu {
    display: flex !important;
  }
  
  .contact-content {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--color-light);
    flex-direction: column;
    padding: var(--space-xl);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  
  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
  }
}

/* ========================================
   ANIMAÇÕES SCROLL REVEAL
   ======================================== */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

/* Alto contraste overrides */
body.high-contrast *,
body.high-contrast a,
body.high-contrast h1,
body.high-contrast h2,
body.high-contrast h3,
body.high-contrast p {
  color: var(--color-hc-text) !important;
  background-color: var(--color-hc-bg) !important;
  border-color: var(--color-hc-primary) !important;
}

body.high-contrast .tab-button {
  background: var(--color-hc-bg) !important;
  border-color: var(--color-hc-primary) !important;
}
/* ADICIONE ESTAS CLASSES ao style.css existente (após .menu-card) */

/* ========================================
   CARDÁPIO ADAPTATIVO - FILTROS
   ======================================== */
.menu-filters {
  display: flex;
  justify-content: center;
  gap: var(--space-sm);
  margin: var(--space-xl) 0;
  flex-wrap: wrap;
}

.filter-btn {
  padding: var(--space-sm) var(--space-lg);
  background: transparent;
  border: 2px solid var(--color-secondary);
  color: var(--color-text);
  border-radius: var(--radius);
  cursor: pointer;
  font-weight: 500;
  font-size: var(--font-size-sm);
  transition: all 0.3s ease;
  white-space: nowrap;
}

.filter-btn.active,
.filter-btn:hover,
.filter-btn:focus {
  background: var(--color-primary);
  color: var(--color-light);
  border-color: var(--color-primary);
  transform: translateY(-2px);
}

.menu-search {
  position: relative;
  max-width: 400px;
  margin: 0 auto var(--space-2xl);
}

#menu-search {
  width: 100%;
  padding: var(--space-lg) var(--space-xl) var(--space-lg) 3rem;
  border: 2px solid #e2e8f0;
  border-radius: var(--radius);
  font-size: var(--font-size-base);
  transition: all 0.3s ease;
}

#menu-search:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: var(--shadow);
}

.search-icon {
  position: absolute;
  left: var(--space-xl);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: var(--font-size-lg);
}

/* ========================================
   MENU CARDS COM CATEGORIAS
   ======================================== */
.menu-card {
  position: relative;
  background: var(--color-light);
  padding: var(--space-lg);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
  border-top: 4px solid transparent;
}

.menu-card.category-bebidas { border-top-color: #3b82f6; }
.menu-card.category-comidas { border-top-color: #10b981; }
.menu-card.category-doces { border-top-color: #f59e0b; }
.menu-card.category-especiais { border-top-color: #8b5cf6; }
.menu-card.hidden { 
  display: none; 
  opacity: 0 !important;
  transform: translateY(30px) !important;
}

.menu-card h3 {
  margin-bottom: var(--space-sm);
  color: var(--color-primary);
}

.menu-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin: var(--space-sm) 0;
}

.tag {
  background: var(--color-accent);
  color: var(--color-primary);
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: var(--font-size-sm);
  font-weight: 500;
}

/* ========================================
   MELHORIAS VISUAIS
   ======================================== */
.hero-subtitle {
  font-size: clamp(1.125rem, 2.5vw, 1.25rem);
}

.contact-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: var(--space-md);
  text-align: center;
}

/* ========================================
   RESPONSIVO MELHORADO
   ======================================== */
@media (max-width: 768px) {
  .menu-filters {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: var(--space-sm);
  }
  
  .filter-btn {
    flex-shrink: 0;
    min-width: 80px;
  }
}

body.high-contrast .menu-card {
  border-top-color: var(--color-hc-primary) !important;
  background: var(--color-hc-bg) !important;
}
