# Experiência Prática 2 - Sistema de Gerenciamento de ONGs

## 🎨 Design e Estilização

### Visão Geral
Esta segunda etapa do projeto focou na implementação do design visual e responsivo do sistema, aplicando conceitos avançados de CSS3 e garantindo uma experiência consistente em diferentes dispositivos.

### 🎯 Objetivos Alcançados

#### Design Responsivo
- Layout adaptativo para diferentes tamanhos de tela
- Abordagem Mobile First
- Breakpoints estratégicos para tablets e desktops
- Grid system flexível
- Imagens responsivas

#### Sistema de Design
- Paleta de cores institucional
- Tipografia consistente
- Espaçamentos padronizados
- Elementos de interface reutilizáveis
- Componentes modulares

### 📱 Responsividade

#### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

#### Recursos Responsivos
- Menu hamburguer para mobile
- Layouts adaptativos
- Imagens flexíveis
- Tipografia fluida
- Grid responsivo

### 🎭 Sistema de Cores

```css
:root {
  --primary-color: #2C5282;
  --secondary-color: #4299E1;
  --accent-color: #48BB78;
  --text-color: #2D3748;
  --background-color: #F7FAFC;
}
```

### 📝 Componentes Estilizados

1. **Navegação**
   - Menu responsivo
   - Dropdown
   - Estados ativos
   - Transições suaves

2. **Botões**
   - Primário
   - Secundário
   - Call-to-action
   - Estados (hover, active, disabled)

3. **Formulários**
   - Inputs estilizados
   - Select customizado
   - Checkbox e Radio personalizados
   - Mensagens de validação
   - Feedback visual

4. **Cards**
   - Sombras
   - Hover effects
   - Imagem + conteúdo
   - Estados interativos

### 🚀 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/Katarinaberninii/administracao-ong.git
cd administracao-ong/experiencia-pratica-2
```

2. Abra o projeto:
- Abra o arquivo `index.html` em seu navegador
- Ou utilize um servidor local:
```bash
python -m http.server 8000
```

3. Teste a responsividade:
- Utilize as ferramentas de desenvolvedor do navegador (F12)
- Teste em diferentes dispositivos
- Verifique os breakpoints

### 🔜 Próximos Passos

1. Implementação de funcionalidades JavaScript
