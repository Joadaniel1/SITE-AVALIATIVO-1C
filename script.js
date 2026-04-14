// ========================================
// GESTÃO DE DADOS - ARRAYS MODULARES
// ========================================
const data = {
    about: [
        {
            title: "Grãos Selecionados",
            content: "Importamos os melhores grãos de pequenos produtores do Sul de Minas e Espírito Santo. Cada lote passa por análise sensorial detalhada.",
            icon: "☕"
        },
        {
            title: "Torra Artesanal",
            content: "Nossa torrefação própria garante frescor máximo. Controlamos temperatura e tempo para extrair o melhor perfil de cada grão.",
            icon: "🔥"
        },
        {
            title: "Baristas Premiados",
            content: "Equipe campeã estadual de barismo 2025. Mais de 10 anos de experiência combinados em cada xícara servida.",
            icon: "🥇"
        }
    ],
    
    menu: {
        drinks: [
            { name: "Espresso", price: "R$ 8,00", desc: "Clássico italiano, 25ml de pura intensidade" },
            { name: "Cappuccino", price: "R$ 12,00", desc: "Espresso, leite vaporizado e espuma cremosa" },
            { name: "Flat White", price: "R$ 14,00", desc: "Microespuma de leite sobre dupla dose de espresso" },
            { name: "Cold Brew", price: "R$ 16,00", desc: "Extração fria por 18h, servido com gelo" },
            { name: "Chemex", price: "R$ 18,00", desc: "Café filtrado em vidro, método pour-over" },
            { name: "Matcha Latte", price: "R$ 15,00", desc: "Chá matcha orgânico com leite vegetal" }
        ],
        food: [
            { name: "Croissant", price: "R$ 9,00", desc: "Manteiga francesa, assado diariamente" },
            { name: "Torta de Limão", price: "R$ 12,00", desc: "Cremosa com merengue italiano" },
            { name: "Pão de Queijo", price: "R$ 8,00", desc: "Requeijão artesanal, versão gourmet" },
            { name: "Brigadeiro Gourmet", price: "R$ 6,00", desc: "4 unidades com sabores sazonais" }
        ],
        specials: [
            { name: "Café do Mês", price: "R$ 22,00", desc: "Edição limitada: Geisha Panamá" },
            { name: "Combo Executivo", price: "R$ 28,00", desc: "Espresso + Croissant + Suco" },
            { name: "Vegan Box", price: "R$ 25,00", desc: "Cold Brew + Torta Vegana + Cookie" }
        ]
    },
    
    events: [
        {
            title: "Workshop Barista",
            date: "20/04/2026",
            description: "Aprenda técnicas profissionais de espresso e latte art",
            image: "coffee-workshop"
        },
        {
            title: "Copa de Cafés",
            date: "25/04/2026",
            description: "Degustação cega com 12 cafés especiais premiados",
            image: "coffee-cupping"
        },
        {
            title: "Live Jazz",
            date: "27/04/2026",
            description: "Trio de jazz ao vivo + harmonização com cafés",
            image: "jazz-night"
        },
        {
            title: "Torra Aberta",
            date: "30/04/2026",
            description: "Visita guiada à nossa torrefação artesanal",
            image: "roasting"
        }
    ]
};

// ========================================
// INICIALIZAÇÃO
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    initAccessibility();
    renderAbout();
    initTabs();
    initCarousel();
    initNavigation();
    initScrollReveal();
    initContactForm();
});

// ========================================
// ACESSIBILIDADE
// ========================================
function initAccessibility() {
    let fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const baseFontSize = 16;
    
    document.getElementById('font-smaller').addEventListener('click', () => {
        fontSize = Math.max(12, fontSize * 0.9);
        document.documentElement.style.fontSize = fontSize + 'px';
    });
    
    document.getElementById('font-larger').addEventListener('click', () => {
        fontSize = Math.min(24, fontSize * 1.1);
        document.documentElement.style.fontSize = fontSize + 'px';
    });
    
    document.getElementById('high-contrast').addEventListener('click', (e) => {
        document.body.classList.toggle('high-contrast');
        const isHighContrast = document.body.classList.contains('high-contrast');
        e.target.setAttribute('aria-pressed', isHighContrast);
        e.target.textContent = isHighContrast ? 'NC' : 'HC';
    });
    
    // Teclado para acessibilidade
    document.querySelectorAll('.accessibility-btn').forEach(btn => {
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });
    });
}

// ========================================
// RENDERIZAÇÃO DINÂMICA
// ========================================
function renderAbout() {
    const container = document.getElementById('about-content');
    data.about.forEach((item, index) => {
        const card = document.createElement('article');
        card.className = 'about-card reveal';
        card.setAttribute('aria-labelledby', `about-title-${index}`);
        card.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: var(--space-md);">${item.icon}</div>
            <h3 id="about-title-${index}">${item.title}</h3>
            <p>${item.content}</p>
        `;
        container.appendChild(card);
    });
}

function renderMenuItems(containerId, items) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    items.forEach(item => {
        const card = document.createElement('article');
        card.className = 'menu-card reveal';
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p class="menu-price">${item.price}</p>
            <p>${item.desc}</p>
        `;
        container.appendChild(card);
    });
}

// ========================================
// SISTEMA DE ABAS
// ========================================
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetPanel = document.getElementById(button.getAttribute('aria-controls'));
            
            // Update buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');
            
            // Update panels
            tabPanels.forEach(panel => {
                panel.classList.remove('active');
                panel.setAttribute('aria-hidden', 'true');
            });
            targetPanel.classList.add('active');
            targetPanel.setAttribute('aria-hidden', 'false');
            
            // Render content
            const category = button.getAttribute('aria-controls');
            renderMenuItems(category, data.menu[category]);
        });
        
        // Keyboard navigation
        button.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                const nextButton = button.parentElement.querySelector('.tab-button');
                nextButton.focus();
            } else if (e.key === 'ArrowLeft') {
                const prevButton = [...tabButtons].reverse().includes(button) 
                    ? button.parentElement.querySelector('.tab-button:last-child')
                    : button.previousElementSibling;
                prevButton.focus();
            }
        });
    });
    
    // Initialize first tab
    renderMenuItems('drinks', data.menu.drinks);
}

// ========================================
// CARROSSEL FUNCIONAL
// ========================================
function initCarousel() {
    const track = document.getElementById('carousel-track');
    const dotsContainer = document.getElementById('carousel-dots');
    const slides = data.events;
    let currentIndex = 0;
    
    // Render slides
    slides.forEach((event, index) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide reveal';
        slide.setAttribute('role', 'listitem');
        slide.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>${event.date}</strong></p>
            <p>${event.description}</p>
            <button class="cta-button" style="width: 100%; margin-top: var(--space-md);">Saiba Mais</button>
        `;
        track.appendChild(slide);
        
        // Dots
        const dot = document.createElement('button');
        dot.className = 'dot';
        dot.setAttribute('aria-label', `Ir para slide ${index + 1}`);
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;
    
    window.goToSlide = goToSlide;
    
    function goToSlide(slideIndex) {
        currentIndex = slideIndex;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
        updateSlideVisibility();
    }
    
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function updateSlideVisibility() {
        track.querySelectorAll('.carousel-slide').forEach((slide, index) => {
            slide.classList.toggle('fade-in', index === currentIndex);
        });
    }
    
    document.querySelector('.carousel-prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        goToSlide(currentIndex);
    });
    
    document.querySelector('.carousel-next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        goToSlide(currentIndex);
    });
    
    // Auto-play
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        goToSlide(currentIndex);
    }, 5000);
    
    // Keyboard support
    document.querySelector('.carousel-container').addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            document.querySelector('.carousel-prev').click();
        } else if (e.key === 'ArrowRight') {
            document.querySelector('.carousel-next').click();
        }
    });
}

// ========================================
// NAVEGAÇÃO MOBILE
// ========================================
function initNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
        
        // Animação hamburger
        menuToggle.classList.toggle('active');
    });
    
    // Close menu on link click
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// ========================================
// SCROLL REVEAL ANIMAÇÕES
// ========================================
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all reveal elements
    document.querySelectorAll('.reveal, .about-card, .menu-card, .carousel-slide').forEach(el => {
        observer.observe(el);
    });
}

// ========================================
// FORMULÁRIO DE CONTATO
// ========================================
function initContactForm() {
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulação de envio
        const button = form.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        
        button.textContent = 'Enviando...';
        button.disabled = true;
        
        setTimeout(() => {
            button.textContent = 'Mensagem enviada!';
            button.style.background = '#10b981';
            
            setTimeout(() => {
                form.reset();
                button.textContent = originalText;
                button.disabled = false;
                button.style.background = '';
            }, 2000);
        }, 1500);
    });
}

// ========================================
// SMOOTH SCROLL PARA LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
