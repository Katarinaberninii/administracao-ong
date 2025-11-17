// Função para salvar dados no localStorage
function salvarDadosFormulario(dadosFormulario) {
    // Recupera a lista existente ou cria uma nova
    const listaExistente = carregarListaCadastros();
    listaExistente.push(dadosFormulario);
    localStorage.setItem('listaCadastros', JSON.stringify(listaExistente));
}

// Função para recuperar lista de cadastros do localStorage
function carregarListaCadastros() {
    const dadosSalvos = localStorage.getItem('listaCadastros');
    return dadosSalvos ? JSON.parse(dadosSalvos) : [];
}

// Função para recuperar último cadastro em andamento
function carregarDadosFormulario() {
    const dadosSalvos = localStorage.getItem('cadastroTemporario');
    return dadosSalvos ? JSON.parse(dadosSalvos) : null;
}

// Função para salvar cadastro em andamento
function salvarCadastroTemporario(dados) {
    localStorage.setItem('cadastroTemporario', JSON.stringify(dados));
}

// Função para coletar dados do formulário
function obterDadosFormulario() {
    const formulario = document.getElementById('form-cadastro');
    const dadosFormulario = {
        id: Date.now(), // Adiciona um ID único baseado no timestamp
        data_cadastro: new Date().toISOString(), // Adiciona a data do cadastro
        nome: formulario.nome.value,
        email: formulario.email.value,
        cpf: formulario.cpf.value,
        telefone: formulario.telefone.value,
        data_nascimento: formulario.data_nascimento.value,
        endereco: formulario.endereco.value,
        cep: formulario.cep.value,
        cidade: formulario.cidade.value,
        estado: formulario.estado.value,
        tipo_cadastro: formulario.tipo_cadastro.value
    };
    return dadosFormulario;
}

// Função para preencher o formulário com dados salvos
function preencherFormularioComDadosSalvos(dados) {
    const formulario = document.getElementById('form-cadastro');
    if (!dados) return;

    // Preenche cada campo com o dado salvo
    Object.keys(dados).forEach(chave => {
        if (formulario[chave]) {
            formulario[chave].value = dados[chave];
        }
    });
}

// Função para limpar dados temporários
function limparDadosTemporarios() {
    localStorage.removeItem('cadastroTemporario');
}

// Função para limpar todos os dados
function limparTodosDados() {
    localStorage.removeItem('cadastroTemporario');
    localStorage.removeItem('listaCadastros');
}

// Inicializa o gerenciamento do formulário
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-cadastro');
    const botaoLimpar = document.getElementById('btn-limpar');
    const feedback = document.getElementById('feedback');

    // Verifica se o formulário existe
    if (!form) {
        console.error('Formulário não encontrado na página!');
        return;
    }

    // Carregar último cadastro não finalizado
    const dadosTemporarios = carregarDadosFormulario();
    if (dadosTemporarios) {
        preencherFormularioComDadosSalvos(dadosTemporarios);
        if (feedback) {
            mostrarFeedback('Dados do último cadastro recuperados', 'info');
        }
    }

    // Salvar dados temporários quando o formulário mudar
    form.addEventListener('input', () => {
        const dadosFormulario = obterDadosFormulario();
        salvarCadastroTemporario(dadosFormulario);
        if (feedback) {
            mostrarFeedback('Dados salvos temporariamente', 'info');
        }
    });

    // Configurar botão de limpar se ele existir
    if (botaoLimpar) {
        botaoLimpar.addEventListener('click', () => {
            if (confirm('Deseja limpar todos os dados salvos? Isso incluirá todos os cadastros.')) {
                limparTodosDados();
                form.reset();
                if (feedback) {
                    mostrarFeedback('Todos os dados foram limpos', 'success');
                }
            } else if (confirm('Deseja limpar apenas o formulário atual?')) {
                limparDadosTemporarios();
                form.reset();
                if (feedback) {
                    mostrarFeedback('Formulário atual limpo', 'success');
                }
            }
        });
    }

    // Processar envio do formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        try {
            // Obter e salvar dados do formulário
            const dadosFormulario = obterDadosFormulario();
            salvarDadosFormulario(dadosFormulario);

            // Exibe os dados salvos
            console.log('Novo cadastro:', dadosFormulario);
            console.log('Lista completa:', carregarListaCadastros());

            // Limpa o formulário e os dados temporários
            limparDadosTemporarios();
            if (feedback) {
                mostrarFeedback('Cadastro realizado com sucesso!', 'success');
            }
            form.reset();
        } catch (erro) {
            console.error('Erro ao processar o formulário:', erro);
            if (feedback) {
                mostrarFeedback('Erro ao processar o formulário', 'error');
            }
        }
    });
});

// Função para mostrar feedback
function mostrarFeedback(mensagem, tipo) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = mensagem;
    feedback.className = `feedback ${tipo}`;

    // Limpar a mensagem após 3 segundos
    setTimeout(() => {
        feedback.textContent = '';
        feedback.className = 'feedback';
    }, 3000);
}