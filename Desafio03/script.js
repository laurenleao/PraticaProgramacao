const usuarios = [];

const textoExemplo = "Painel de Cadastro";
const numeroExemplo = 2026;
const booleanoExemplo = true;

console.log(`Tipo de 'textoExemplo' (${textoExemplo}):`, typeof textoExemplo);
console.log(`Tipo de 'numeroExemplo' (${numeroExemplo}):`, typeof numeroExemplo);
console.log(`Tipo de 'booleanoExemplo' (${booleanoExemplo}):`, typeof booleanoExemplo);

const formUsuario = document.getElementById('form-usuario');
const inputNome = document.getElementById('nome');
const inputIdade = document.getElementById('idade');
const inputEmail = document.getElementById('email');
const mensagemValidacao = document.getElementById('mensagem-validacao');
const listaUsuariosContainer = document.getElementById('lista-usuarios');
const btnOrdenar = document.getElementById('btn-ordenar');
const btnRemover = document.getElementById('btn-remover');
const inputBusca = document.getElementById('busca');
const btnCadastrar = document.getElementById('btn-cadastrar');

const statTotal = document.getElementById('stat-total');
const statMedia = document.getElementById('stat-media');

function classificarIdade(idade) {
  let faixaEtaria = "";
  let classeCss = "";

  if (idade <= 17) {
    faixaEtaria = "Menor de idade";
    classeCss = "menor";
  } else if (idade >= 18 && idade <= 59) {
    faixaEtaria = "Adulto";
    classeCss = "adulto";
  } else {
    faixaEtaria = "Idoso";
    classeCss = "idoso";
  }

  return { faixaEtaria, classeCss };
}

function atualizarEstatisticas() {
  const total = usuarios.length;
  statTotal.textContent = total;

  if (total === 0) {
    statMedia.textContent = "0 anos";
    return;
  }

  const somaIdades = usuarios.reduce((acc, curr) => acc + curr.idade, 0);
  const media = (somaIdades / total).toFixed(1);
  statMedia.textContent = `${media} anos`;
}

const renderizarLista = (listaParaExibir = usuarios) => {
  listaUsuariosContainer.innerHTML = "";

  if (listaParaExibir.length === 0) {
    listaUsuariosContainer.innerHTML = "<p>Nenhum usuário encontrado.</p>";
    atualizarEstatisticas();
    return;
  }

  listaParaExibir.forEach((usuario) => {
    const cardHTML = `
      <div class="card-usuario">
        <h3>${usuario.nome}</h3>
        <p><strong>Idade:</strong> ${usuario.idade} anos (${usuario.faixaEtaria})</p>
        <p><strong>E-mail:</strong> ${usuario.email}</p>
      </div>
    `;
    listaUsuariosContainer.innerHTML += cardHTML;
  });

  atualizarEstatisticas();
};

formUsuario.addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = inputNome.value.trim();
  const idade = Number(inputIdade.value);
  const email = inputEmail.value.trim();

  const { faixaEtaria, classeCss } = classificarIdade(idade);

  mensagemValidacao.textContent = `Usuário cadastrado: ${nome} é ${faixaEtaria}.`;
  mensagemValidacao.className = `mensagem ativo ${classeCss}`;

  const novoUsuario = {
    nome: nome,
    idade: idade,
    email: email,
    faixaEtaria: faixaEtaria
  };

  usuarios.push(novoUsuario);
  renderizarLista();
  formUsuario.reset();
});

btnOrdenar.addEventListener('click', () => {
  usuarios.sort((a, b) => a.nome.localeCompare(b.nome));
  renderizarLista();
});

btnRemover.addEventListener('click', () => {
  if (usuarios.length > 0) {
    usuarios.pop();
    renderizarLista();
  } else {
    alert("A lista já está vazia!");
  }
});

inputBusca.addEventListener('input', (event) => {
  const termoBusca = event.target.value.toLowerCase();
  
  const usuariosFiltrados = usuarios.filter((usuario) => 
    usuario.nome.toLowerCase().includes(termoBusca)
  );

  renderizarLista(usuariosFiltrados);
});

btnCadastrar.addEventListener('mouseover', () => {
  mensagemValidacao.textContent = "Preencha todos os campos antes de cadastrar!";
  mensagemValidacao.className = "mensagem ativo menor";
});

renderizarLista();
