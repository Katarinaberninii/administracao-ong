document.addEventListener('DOMContentLoaded', async () => {
    const navPlaceholders = document.querySelectorAll('.nav-placeholder');
    if (!navPlaceholders.length) return;

    try {
        const response = await fetch('/experiencia-pratica-3/components/nav.html');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const navContent = await response.text();
        navPlaceholders.forEach(placeholder => {
            placeholder.innerHTML = navContent;
        });

        // Inicializa o menu mobile
        initMobileMenu();
        // Destaca o item atual do menu
        highlightCurrentPage();
        
    } catch (error) {
        console.error('Erro ao carregar navegação:', error);
        provideFallbackNav();
    }
});

function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.setAttribute('aria-expanded',
                menuToggle.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
            );
            menu.classList.toggle('active');
        });
    }

    // Adiciona funcionalidade dropdown no mobile
    const dropdowns = document.querySelectorAll('.has-dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                const dropdownMenu = dropdown.querySelector('.dropdown');
                if (dropdownMenu && e.target.closest('.has-dropdown')) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            }
        });
    });
}

function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.main-nav a');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && currentPath.endsWith(href)) {
            link.classList.add('active');
        }
    });
}

function provideFallbackNav() {
    const navPlaceholders = document.querySelectorAll('.nav-placeholder');
    const isInPages = window.location.pathname.includes('/pages/');
    
    const fallbackHTML = `
        <nav class="main-nav">
            <div class="nav-container">
                <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false">
                    <span class="hamburger"></span>
                </button>
                <ul class="menu">
                    <li><a href="..//index.html">Início</a></li>
                    <li class="has-dropdown">
                        <a href="../pages/projetos.html">Projetos</a>
                        <ul class="dropdown">
                            <li><a href="../pages/projetos.html#projetos-ativos">Projetos Ativos</a></li>
                            <li><a href="../pages/projetos.html#voluntariado">Voluntariado</a></li>
                            <li><a href="../pages/projetos.html#doacoes">Como Doar</a></li>
                        </ul>
                    </li>
                    <li><a href="../pages/cadastro.html">Cadastre-se</a></li>
                </ul>
            </div>
        </nav>
    `;

    navPlaceholders.forEach(placeholder => {
        placeholder.innerHTML = fallbackHTML;
    });
}

// Carrega a navegação quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', loadNav);