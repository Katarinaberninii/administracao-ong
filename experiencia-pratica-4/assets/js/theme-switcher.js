// Alternância de tema acessível com persistência
(function() {
    const root = document.documentElement;
    const btnLight = document.getElementById('theme-light');
    const btnDark = document.getElementById('theme-dark');
    const btnHC = document.getElementById('theme-hc');
    const buttons = [btnLight, btnDark, btnHC];

    function setTheme(theme) {
        root.classList.remove('theme-dark', 'theme-hc');
        buttons.forEach(btn => btn.setAttribute('aria-pressed', 'false'));
        if (theme === 'dark') {
            root.classList.add('theme-dark');
            btnDark.setAttribute('aria-pressed', 'true');
        } else if (theme === 'hc') {
            root.classList.add('theme-hc');
            btnHC.setAttribute('aria-pressed', 'true');
        } else {
            btnLight.setAttribute('aria-pressed', 'true');
        }
        localStorage.setItem('theme', theme);
    }

    btnLight.addEventListener('click', () => setTheme('light'));
    btnDark.addEventListener('click', () => setTheme('dark'));
    btnHC.addEventListener('click', () => setTheme('hc'));

    // Teclas de atalho: Alt+1 (claro), Alt+2 (escuro), Alt+3 (alto contraste)
    document.addEventListener('keydown', e => {
        if (e.altKey && !e.shiftKey && !e.ctrlKey) {
            if (e.key === '1') { setTheme('light'); }
            if (e.key === '2') { setTheme('dark'); }
            if (e.key === '3') { setTheme('hc'); }
        }
    });

    // Persistência
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'hc') setTheme(saved);
    else setTheme('light');
})();
