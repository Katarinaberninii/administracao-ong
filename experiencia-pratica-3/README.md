# Experiência Prática 3 - Sistema de Gerenciamento de ONGs

## 📱 Implementação de Funcionalidades Interativas

### 🎯 Objetivos
Esta terceira etapa do projeto foca na implementação de funcionalidades interativas e dinâmicas utilizando JavaScript, melhorando a experiência do usuário e tornando a aplicação mais funcional.

### 🛠️ Funcionalidades Implementadas

#### 1. Navegação Dinâmica
- Menu responsivo para dispositivos móveis
- Dropdown interativo para submenus
- Destacamento automático da página atual
- Carregamento dinâmico do menu em todas as páginas

#### 2. Formulários Inteligentes
- Validação em tempo real dos campos
- Máscaras para inputs (CPF, telefone, CEP)
- Feedback visual instantâneo
- Preenchimento automático de endereço via CEP
- Validações personalizadas

#### 3. Galeria de Projetos
- Carregamento dinâmico de projetos
- Filtros interativos por categoria
- Animações suaves na transição
- Modal para detalhes do projeto
- Compartilhamento em redes sociais

#### 4. Sistema de Doações
- Calculadora de impacto
- Seleção de valores predefinidos
- Opção de doação recorrente
- Simulador de benefícios fiscais
- Feedback de progresso

## 🚀 Como Testar

1. Clone o repositório:
```bash
git clone https://github.com/Katarinaberninii/administracao-ong.git
cd administracao-ong/experiencia-pratica-3
```

2. Abra o projeto:
- Abra o arquivo `index.html` em seu navegador
- Ou utilize um servidor local:
```bash
python -m http.server 8000
```

## 📁 Estrutura do Projeto

```
experiencia-pratica-3/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── masks.js
│   │   └── menu.js
│   └── images/
├── pages/
│   ├── projetos.html
│   └── cadastro.html
└── index.html
```