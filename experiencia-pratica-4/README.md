# Experiência Prática 4 - Sistema de Gerenciamento de ONGs

## Acessibilidade e Otimização para Produção

### Visão Geral
Esta quarta etapa do projeto foca na implementação de recursos avançados de acessibilidade conforme as diretrizes WCAG 2.1 Nível AA, além de otimizações para produção garantindo melhor performance e experiência para todos os usuários.

### Objetivos Alcançados

#### Acessibilidade (WCAG 2.1 Nível AA)

##### Navegação por Teclado
- Skip links para conteúdo principal
- Foco visível em todos os elementos interativos
- Navegação completa por teclado (Tab, Enter, Setas, Esc)
- Ordem lógica de tabulação
- Suporte em menu, submenus e formulários

##### Estrutura Semântica
- Landmarks ARIA apropriados (banner, navigation, main, contentinfo)
- Hierarquia de cabeçalhos correta e sem saltos
- Labels explícitos para todos os campos de formulário
- Fieldsets e Legends para agrupar campos relacionados
- Roles e estados ARIA em elementos interativos

##### Contraste e Visualização
- Contraste mínimo de 4.5:1 para texto normal
- Contraste de 3:1 para textos grandes
- Modo escuro automático baseado nas preferências do sistema
- Versão de alto contraste (preto e branco) disponível
- Botão de alternância para contraste no header
- Tamanho de texto ajustável

##### Suporte a Leitores de Tela
- Textos alternativos descritivos para imagens
- Descrições para links e botões
- Anúncios de status com aria-live
- Mensagens de erro e sucesso acessíveis
- Feedback em tempo real de validação

##### Formulários Acessíveis
- Validação em tempo real com feedback visual e sonoro
- Mensagens de erro específicas e acionáveis
- Foco automático em campos com erro
- Máscaras de entrada (CPF, telefone, CEP)
- Agrupamento lógico com fieldsets
- Indicadores visuais de campos obrigatórios

#### Otimização para Produção

##### Minificação
- **HTML**: Remoção de espaços em branco, comentários e atributos redundantes
- **CSS**: Compressão de regras, otimização de seletores e remoção de duplicatas
- **JavaScript**: Minificação com obfuscação de código
- Arquivo de configuração build com scripts npm

##### Compressão de Imagens
- Compressão JPEG com qualidade 65-80%
- Otimização PNG com pngquant
- Otimização SVG com SVGO
- Geração de versões WebP para melhor compatibilidade
- Pasta de saída para imagens otimizadas

### Estrutura do Projeto

```
experiencia-pratica-4/
├── assets/
|   ├── components/
│   │   └── navigation.js
│   ├── css/
│   │   ├── form.css
│   │   └── style.css
│   ├── images/
│   │   ├── criancas-aula.webp
│   │   └── hortas-comunitarias.jpg
│   └── js/
│       ├── form-storage.js
│       ├── masks.js
│       ├── menu.js
│       └── theme-switcher.js
├── pages/
│   ├── projetos.html
│   └── cadastro.html
├── Gruntfile.js
├── index.html
├── package.json
└── README.md
```

### Como Usar

#### Instalação
É necessário realizar a instalação das dependencias necessárias, listadas em `package.json` através do comando npm i

```bash
# Navegar até o diretório
cd experiencia-pratica-4

# Instalar dependências
npm install
```

#### Build de Produção com Grunt
```bash
# Executar o build que vai:
# - Minificar CSS, JavaScript e HTML
# - Otimizar e comprimir imagens
# - Gerar arquivos otimizados na pasta 'dist/'
npx grunt build
```

Após executar este comando, todos os arquivos otimizados estarão disponíveis na pasta `dist/` pronto para deploy em produção.

#### Testar Acessibilidade

1. **Navegação por Teclado**
   - Use `Tab` para navegar entre elementos
   - `Shift + Tab` para navegação reversa
   - `Enter` para ativar links e botões
   - `Setas` para navegação no menu
   - `Esc` para fechar menus

3. **Modos de Contraste**
   - Clique no botão de alto contraste no header
   - Teste com preferências de sistema (prefers-color-scheme)
   - Verifique legibilidade em todos os modos
   - Confirme que as imagens mantêm legibilidade

4. **Responsividade e Performance**
   - Teste zoom até 200%
   - Utilize DevTools para verificar performance
   - Verifique tamanho dos arquivos minificados
   - Teste em diferentes navegadores

### Checklist de Acessibilidade

- [x] Navegação por teclado implementada
- [x] Estrutura semântica adequada
- [x] Contraste mínimo de 4.5:1 garantido
- [x] Suporte completo a leitores de tela
- [x] Modos de contraste (normal, escuro, alto contraste)
- [x] Skip links adicionados
- [x] Labels e ARIA implementados
- [x] Validação de formulário acessível
- [x] Feedback visual e sonoro
- [x] Estados interativos acessíveis
- [x] Imagens com textos alternativos
- [x] Zoom até 200% suportado
- [x] Sem armadilhas de teclado

### Checklist de Otimização para Produção

- [x] Minificação de HTML implementada
- [x] Minificação de CSS implementada
- [x] Minificação de JavaScript implementada
- [x] Compressão de imagens configurada
- [x] Scripts npm para build configurados
- [x] Package.json com dependências necessárias

### Referências

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/pt-BR/docs/Web/Accessibility)
- [WebAIM](https://webaim.org/)
- [Lighthouse Performance](https://developers.google.com/web/tools/lighthouse)