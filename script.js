// ========================================
// CAFÉ GUARAPUAVA - SCRIPT BUG-FREE
// ========================================
const data = {
    about: [
        { title: "Grãos do Planalto 🌄", content: "Cafés premiados de Cruz Machado e Fernandes Pinheiro. Terroir único dos Campos Gerais a 1100m altitude.", icon: "fas fa-mountain" },
        { title: "Torra Artesanal 🔥", content: "Torra lenta em Guarapuava com equipamentos italianos. Frescor máximo colhido a apenas 2h de distância.", icon: "fas fa-fire" },
        { title: "Sabor Paraná 🥇", content: "Premiados no Cup of Excellence. Destaques nacionais com pontuação SCA acima de 87 pontos.", icon: "fas fa-trophy" }
    ],
    menu: [
        // BEBIDAS
        { name: "Espresso Tradicional", price: "R$ 8", desc: "25ml de pura intensidade do planalto", category: "bebidas", tags: ["clássico", "rápido"], time: "1min" },
        { name: "Cappuccino Guarapuava", price: "R$ 12", desc: "Espresso duplo + leite dos laticínios locais", category: "bebidas", tags: ["cremoso"], time: "2min" },
        { name: "Chemex Paraná", price: "R$ 18", desc: "Pour-over de café vencedor estadual 2025", category: "bebidas", tags: ["filtrado"], time: "4min" },
        { name: "Cold Brew Reserva", price: "R$ 16", desc: "18h extração fria de Fernandes Pinheiro", category: "bebidas", tags: ["gelado"], time: "pronto" },
        // COMIDAS
        { name: "Pão de Queijo Mineiro", price: "R$ 8", desc: "Requeijão artesanal de São João do Triunfo", category: "comidas", tags: ["quente"], time: "2min" },
        { name: "Croissant Francês", price: "R$ 10", desc: "Manteiga bordalesa, forno a lenha local", category: "comidas", tags: ["crocante"], time: "1min" },
        { name: "Tapioca Salgada", price: "R$ 14", desc: "Goiabada cascavelense + queijo paranaense", category: "comidas", tags: ["regional"], time: "3min" },
        // DOCES
        { name: "Torta de Limão", price: "R$ 12", desc: "Limões orgânicos do Sudoeste + merengue", category: "doces", tags: ["fresca"], time: "pronto" },
        { name: "Brigadeiro Gourmet", price: "R$ 6", desc: "4un | Chocolate 70% + granulado artesanal", category: "doces", tags: ["porção"], time: "pronto" },
        { name: "Cookie Chunk", price: "R$ 9", desc: "Chocolate belga + castanha-do-pará", category: "doces", tags: ["gourmet"], time: "1min" },
        // ESPECIAIS
        { name: "Café do Mês", price: "R$ 22", desc: "Edição 04/26: Catuaí Amarelo 88 SCA", category: "especiais", tags: ["premium"], time: "4min" },
        { name: "Combo Executivo", price: "R$ 28", desc: "Espresso + Croissant + Suco natural", category: "especiais", tags: ["combo"], time: "3min" },
        { name: "Matcha Latte Vegano", price: "R$ 16", desc: "Chá japonês + leite de aveia caseiro", category: "especiais", tags: ["vegano"], time: "2min" }
    ],
    events: [
        { title: "Workshop Barista", date: "18/04", desc: "Técnicas profissionais + degustação", icon: "fas fa-user-graduate" },
        { title: "Copa Campos Gerais", date: "22/04", desc: "Competição regional de baristas", icon: "fas fa-trophy" },
        { title: "Seresta Paranaense", date: "25/04", desc: "Violão + harmonização de cafés", icon: "fas fa-music" },
        { title: "Torra Aberta", date: "30/04", desc: "Visita à torrefação + degustação", icon: "fas fa-fire" }
    ]
};

document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
    initAccessibility();
    renderAbout();
    initMenu();
    initCarousel();
    initNavigation
