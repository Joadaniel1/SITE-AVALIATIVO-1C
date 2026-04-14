// ========================================
// CAFÉ GUARAPUAVA - SCRIPT COMPLETO
// ========================================

// ========================================
// DADOS - GUARAPUAVA LOCALIZADO
// ========================================
const data = {
    about: [
        {
            title: "Grãos do Planalto",
            content: "Cafés premiados de Cruz Machado e Fernandes Pinheiro. Terroir único dos Campos Gerais a 1100m altitude.",
            icon: "🌄"
        },
        {
            title: "Torra Local",
            content: "Torra lenta em Guarapuava com equipamentos italianos. Frescor máximo colhido a apenas 2h de distância.",
            icon: "🔥"
        },
        {
            title: "Sabor Paraná",
            content: "Premiados no Cup of Excellence. Destaques nacionais com pontuação SCA acima de 87 pontos.",
            icon: "🥇"
        }
    ],
    
    // CARDÁPIO ADAPTATIVO - 13 ITENS REGIONAIS
    menu: [
        // BEBIDAS ☕
        { name: "Espresso Tradicional", price: "R$ 8,00", desc: "25ml de pura intensidade do planalto paranaense", category: "bebidas", tags: ["clássico", "rápido"], time: "1min" },
        { name: "Cappuccino Guarapuava", price: "R$ 12,00", desc: "Espresso duplo + leite dos laticínios locais", category: "bebidas", tags: ["cremoso", "tradicional"], time: "2min" },
        { name: "Chemex Paraná", price: "R$ 18,00", desc: "Pour-over de café vencedor estadual 2025", category: "bebidas", tags: ["filtrado", "limpo"], time: "4min" },
        { name: "Cold Brew Reserva", price: "R$ 16,00", desc: "18h extração fria de Fernandes Pinheiro", category: "bebidas", tags: ["gelado", "suave"], time: "pronto" },
        
        // COMIDAS 🍞
        { name: "Pão de Queijo Mineiro", price: "R$ 8,00", desc: "Requeijão artesanal de São João do Triunfo", category: "comidas", tags: ["quente", "tradicional"], time: "2min" },
        { name: "Croissant Francês", price: "R$ 10,00", desc: "Manteiga bordalesa, forno a lenha local", category: "comidas", tags: ["crocante", "manteiga"], time: "1min" },
        { name: "Tapioca Salgada", price: "R$ 14,00", desc: "Goiabada cascavelense + queijo paranaense", category: "comidas", tags: ["rápida", "regional"], time: "3min" },
        
        // DOCES 🍰
        { name: "Torta de Limão", price: "R$ 12,00", desc: "Limões orgânicos do Sudoeste + merengue", category: "doces", tags: ["ácida", "fresca"], time: "pronto" },
        { name: "Brigadeiro 3 Corações", price: "R$ 6,00", desc: "4un | Chocolate 70% + granulado artesanal", category: "doces", tags: ["clássico", "porção"], time: "pronto" },
        { name: "Cookie Chunk", price: "R$ 9,00", desc: "Chocolate belga + castanha-do-pará", category: "doces", tags: ["crocrante", "gourmet"], time: "1min" },
        
        // ESPECIAIS ⭐
        { name: "Café do Mês", price: "R$ 22,00", desc: "Edição 04/26: Catuaí Amarelo 88 SCA", category: "especiais", tags: ["limitado", "premium"], time: "4min" },
        { name: "Combo Executivo", price: "R$ 28,00", desc: "Espresso + Croissant + Suco natural", category: "especiais", tags: ["combo", "rápido"], time: "3min" },
        { name: "Matcha Latte Vegano", price: "R$ 16,00", desc: "Chá japonês + leite de aveia caseiro", category: "especiais", tags: ["vegano", "leve"], time: "2min" }
    ],
    
    events: [
        {
            title: "Workshop Barista",
            date: "18/04/2026",
            description: "Técnicas profissionais + degustação guiada pelos Campos Gerais"
        },
        {
            title: "Copa Campos Gerais",
            date: "22/04/2026",
            description: "Competição regional de baristas com jurados nacionais"
        },
        {
            title: "Seresta Paranaense",
            date: "25/04/2026",
            description: "Violão + gaita ponto + harmonização com cafés especiais"
        },
        {
            title: "Torra Aberta",
            date: "30/04/2026",
            description: "Visita guiada à nossa torrefação + degustação exclusiva"
        }
    ]
};

// ========================================
// INICIALIZAÇÃO CENTRALIZADA
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌄 Café Guarapuava carregado!');
    
    initAccessibility();
    renderAbout();
    initAdaptiveMenu();
    initCarousel();
    initNavigation();
    initScrollReveal();
    initContactForm();
    initSmoothScroll();
});

// ========================================
// 1. ACESSIBILIDADE COMPLETA
// ========================================
function initAccessibility() {
    let fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const baseFontSize = 16;
    
    // Zoom Fonte
    document.getElementById('font-smaller').addEventListener('click', () => {
        fontSize = Math.max(12, fontSize * 0.9);
        document.documentElement.style.fontSize = fontSize + 'px';
    });
    
    document.getElementById('font-larger').addEventListener('click', () => {
        fontSize = Math.min(24, fontSize * 1.1);
        document.documentElement.style.fontSize = fontSize + 'px';
    });
    
    // Alto Contraste
    document.getElementById('high-contrast').addEventListener('click', (e) => {
        document.body.classList.toggle('high-contrast');
        const isHighContrast = document.body.classList.contains('high-contrast');
        e.target.setAttribute('aria-pressed', isHighContrast);
        e.target.textContent = isHighContrast ? 'NC' : 'HC';
    });
    
    // Suporte teclado para botões acessibilidade
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
// 2. SOBRE - CARDS DINÂMICOS
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

// ========================================
// 3. CARDÁPIO ADAPTATIVO - FILTRO + BUSCA
// ========================================
function initAdaptiveMenu() {
    renderMenuItems(data.menu);
    
    // Filtros clicáveis
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setActiveFilter(btn);
            filterItems(btn.dataset.filter);
        });
        // Navegação teclado nos filtros
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRilter(btn);
            filterItems               const buttons = document.querySelectorAll('.filter-btn');
                const currentIndex = Array.from(buttons).indexOf(btn);
                const nextIndex = e.key === 'ArrowRight' ? (currentIndex + 1) % buttons.length : (currentIndex - 1 + buttons.length) % buttons.length;
                buttons[nextIndex].focus();
            }
        });
    });
    
    // Busca em tempo real
    const searchInput = document.getElementById('menu-search');
    searchInput.addEventListener('input', (e) => filterBySearch(e.target.value));
}

function renderMenuItems(items) {
    const container = document.getElementById('menu-grilter(btn);
            filterItems
    
    items.forEach((item, index) => {
        const card = document.createElement('article');
        card.className = `menu-card category-${item.category} reveal`;
        card.setAttribute('role', 'listitem');
        card.setAttribute('tabindex', '0');
        card.dataset.category = item.catelter(btn);
            filterItems= item.name.toLowerCaselter(btn);
            filterItems;
        card.innerHTML = `
            <h3>${item.name}</hlter(btn);
            filterItemse">${item.price}</p>
            <p>${item.desc}</p>
            <div class="menu-tags">
                ${item.tagslter(btn);
            filterItemsag}</span>`).join('')}
            </div>
            <div style="margin-top: var(--space-md); color: #6b7280; font-size: var(--font-size-sm); font-weight: 500;">
                ⏱️ ${item.lter(btn);
            filterItems;
        container.appendChild(card);
    });
    
    // Cards clicáveis para detalhes
    document.querySelectorAll('.menu-card').forEach(card => {
        card.addEventListener('click', () => {
            card.style.translter(btn);
            filterItems      filterItemscard.style.transform = '', 200);
        });
    });
}

functionlter(btn);
            filterItems;
            filterItems('.filter-btn').forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

function filterItems(filter) {
    const cards = document.querySelectorAll('.menu-card');
    let vislter(btn);
            filterItemsach((card, index) => {
        const category = card.dataset.category;
        if (filter === 'all' || category === filter) {
            card.classList.remove('hidden');
            setTimeout(() => {
                card.classList.add('fade-in');
                card.style.animationDelay = `${index * 50}ms`;
            }, 50);
            visibleCount++;
        } else {
            card.classList.remove('fade-in');
            card.classList.add('hidden');
        }
    });
    
    console.log(`🌟 Filtrado: ${visibleCount} itens visíveis`);
}

function filterBySearch(query) {
    const cards = document.querySelectorAll('.menu-card');
    const normalizedQuery = query.toLowerCase().trilter(btn);
            filterItems> {
        const searchText = card.dataset.search;
        if (normalizedQuery === '' || searchText.includes(normalizedQuery)) {
            card.classList.remove('hidden');
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            card.classList.add('hidden');
        }
    });
}

// ========================================
// 4. CARROSSEL FUNCIONAL
// ========================================
function initCarousel() {
    const track = document.getElementById('carousel-track');
    const dotsContainer = document.getElementById('carousel-dots');
    const slides = data.events;
    let currentIlter(btn);
            filterItems;
    
    // Renderizar slides
    slides.forEach((event, index) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide reveal';
        slide.setAttribute('role', 'listitem');
        slide.innerlter(btn);
            filterItemsitle}</h3>
            <p style="lter(btn);
            filterItemsnt-weight: 600; color: var(--color-primary); margin: var(--space-sm) lter(btn);
            filterItemste}
            </p>
            <p>${event.description}</p>
            <button class="cta-button" style="width: 100%; margin-top: var(--space-lg);">Saiba Mais →</button>
        `;
        track.appendChild(slide);
        
        // Dots
        const dot = document.createElement('button');
        dot.className = 'dot';
        dot.setAttribute('aria-label', `Ir para evento ${index + 1}: ${event.title}`);
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.lengtlter(btn);
            filterItems   window.goToSlide = goToSlide;
    
    function goToSlide(slideIndex) {
        currentIndex = slideIndex;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
        updateSlideVisibility();
        resetAutoPlay();
    }
    
    function updateDots() {
        dots.forEach((dot, index) => dot.classList.toggle('active', index === currentIndex));
    }
    
    function updateSlideVisibility() {
        track.querySelectorAll('.carousel-slide').forEach((slide, ilter(btn);
            filterItemsList.toggle('fade-in', index === currentIndex);
        });
    }
    
    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            goToSlide(currentIndex);
        }, 5000);
    }
    
    // Controles
    document.querySelector('.carousel-prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        goToSlide(currentIndex);
    });
    
    document.querySelector('.carousel-next').addEventListener('click', () => {
        currentIndex = (currentIlter(btn);
            filterItemsoToSlide(currentIndex);
    });
    
    // Pause no hover
    document.querySelector('.carousel-container').addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    document.querySelector('.carousel-container').addEventListener('mouseleave', resetAutoPlay);
    
    // Inicializar
    goToSlide(0);
    resetAutoPlay();
}

// ========================================
// 5. NAVEGAÇÃO MOBILE
// ========================================
function initNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListenlter(btn);
            filterItemsisExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        // Animação hamburger
        if (!isExpandelter(btn);
            filterItemselectorAll('span').forEach((span, i) lter(btn);
            filterItemsansform = `rotate(${i * 90 + 45}deg) translate(${i * 2}px, ${i * 2}px)`;
            });
        }
   lter(btn);
            filterItemsicar link
    document.querySelectorAll('.nav-menu a').forEach(lter(btn);
            filterItemstener('click', () => {
            menuToggle.setAttribute('aria-expandlter(btn);
            filterItems.classList.remove('active');
            menuToggle.clter(btn);
            filterItems });
    });
}

// ========================================
/lter(btn);
            filterItems======================================
function initScrollReveallter(btn);
            filterItems(btn);
            filterItems   rootMargin: '0px 0px -50px 0plter(btn);
            filterItems= new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersectinlter(btn);
            filterItemsclassList.add('fade-in');
                entry.target.style.animationDellter(btn);
            filterItems   }
        });
    }, observerOptiolter(btn);
            filterItemsorAll('.reveal, .about-carlter(btn);
            filterItemsorEach(el => {
        obselter(btn);
            filterItems===========================lter(btn);
            filterItemsTO
// =============================lter(btn);
            filterItemsrmlter(btn);
            filterItemsrySelector('.contact-form');
    
    form.addEventListener('submit', (e) lter(btn);
            filterItemstn);
            filterItems
            filterItemscument.getElementById('name').value.trim();
        const emalter(btn);
            filterItemsl').value.trim();
        const message = document.getElementById('message').vlter(btn);
            filterItems!name || !email || !message) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
        
        // Simular envio
        const button = form.querySelector('button[type="submit"]');
        const originallter(btn);
            filterItems 
        button.textContent = 'Enviando...';
        button.disabled = true;
        button.style.background = '#6b7280';
        
        // Simular delay de servidor
        setTimeout(() => {
            button.textContent = '✅ Enviado!';
            button.style.background = '#10b9lter(btn);
            filterItemseset após 2s
            setTimeout(() => {
                form.reset();
                button.textContent = originalText;
                button.disalter(btn);
            filterItemson.style.background = '';
            }, 2000);
        }, 1500);
        
        console.log('📧 Formulário enviado:', { name, email, message });
    });
}

// ========================================
// 8. SMOOTH SCROLL GLOBAL
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"lter(btn);
            filterItemschor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 100;
                const elelter(btn);
            filterItemslientRect().lter(btn);
            filterItemsosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// 9. HEADER FIXO COM SCROLL
// =============================lter(btn);
            filterItemsr('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        helter(btn);
            filterItemsx rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 4px 6px -1px rgba(lter(btn);
            filterItems=========================lter(btn);
            filterItemsbtn);
            filterItems===================
console.log('✅ Café Guarapuava: Todos módulos carregados!');
