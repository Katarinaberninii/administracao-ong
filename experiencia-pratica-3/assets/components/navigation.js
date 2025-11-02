class NavigationComponent extends HTMLElement {
    constructor() {
        super();
        const isInPages = window.location.pathname.includes('/pages/');
        const basePath = isInPages ? '..' : '.';
        
        this.innerHTML = `
            <nav>
                <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false">
                    <span class="hamburger"></span>
                </button>
                <ul class="menu">
                    <li><a href="${basePath}/index.html">Início</a></li>
                    <li class="has-dropdown">
                        <a href="${basePath}/pages/projetos.html">Projetos</a>
                        <ul class="dropdown">
                            <li><a href="${basePath}/pages/projetos.html#voluntariado">Voluntariado</a></li>
                            <li><a href="${basePath}/pages/projetos.html#doacoes">Como doar</a></li>
                        </ul>
                    </li>
                    <li><a href="${basePath}/pages/cadastro.html">Cadastre-se</a></li>
                </ul>
            </nav>
        `;
        this.incializarMenu();
    }

    incializarMenu() {
        const menuToggle = this.querySelector('.menu-toggle');
        const menu = this.querySelector('.menu');
        
        if (menuToggle && menu) {
            menuToggle.addEventListener('click', () => {
                const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
                menuToggle.setAttribute('aria-expanded', !isExpanded);
                menu.classList.toggle('active');
            });
        }

        // Adiciona funcionalidade dropdown no mobile
        const dropdowns = this.querySelectorAll('.has-dropdown');
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

        // Destaca a página atual
        this.destacarPaginaAtual();
    }

    destacarPaginaAtual() {
        const caminhoAtual = window.location.pathname;
        const links = this.querySelectorAll('a');
        
        links.forEach(link => {
            const href = link.getAttribute('href');
            const arquivoAtual = caminhoAtual.split('/').pop();
            const arquivoLink = href.split('/').pop().split('#')[0];
            
            if (arquivoAtual === arquivoLink) {
                link.classList.add('active');
                const hash = window.location.hash;
                if (hash && href.includes(hash)) {
                    link.classList.add('active');
                }
            }
        });
    }
}

customElements.define('nav-component', NavigationComponent);