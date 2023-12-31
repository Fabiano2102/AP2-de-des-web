const url = "https://botafogo-atletas.mange.li/feminino";
const body = document.body;

body.style.display = 'flex';
body.style.gap = '.5em';
body.style.flexWrap = 'wrap';

const cria_cartao = (entrada) => { 
    const container_atleta = document.createElement('article');
    container_atleta.classList.add('player-cards-container');
   
    container_atleta.dataset.id = entrada.id;
    container_atleta.dataset.altura = entrada.altura;
    container_atleta.dataset.nome_completo = entrada.nome_completo;
    container_atleta.dataset.nascimento = entrada.nascimento;

    const titulo = document.createElement('h3');
    titulo.innerHTML = entrada.nome;

    const imagem = document.createElement('img');
    imagem.src = entrada.imagem;
    imagem.alt = `foto de ${entrada.nome}`;
    

    const saibaMais = document.createElement('a');
    saibaMais.textContent = 'Saiba mais';
    saibaMais.classList.add('saibaMais');
  
    
    saibaMais.onclick = () => {
        redirecionarParaDetalhes();
    };

    container_atleta.appendChild(titulo);
    container_atleta.appendChild(imagem);
    container_atleta.appendChild(saibaMais)

    container_atleta.onclick = manipulaClick;

    document.body.appendChild(container_atleta);
};

const redirecionarParaDetalhes = () => {

    window.location.href = 'detalhes_atleta.html';
};


const manipulaClick = (e) => {
    const artigo = e.target.closest('article');

    document.cookie = `id=${artigo.dataset.id}`;
    document.cookie = `altura=${artigo.dataset.altura}`;
    document.cookie = `nome_completo=${artigo.dataset.nome_completo}`;
    document.cookie = `nascimento=${artigo.dataset.nascimento}`;

    localStorage.setItem('id', artigo.dataset.id);
    localStorage.setItem('altura', artigo.dataset.altura);
    localStorage.setItem('nome_completo', artigo.dataset.nome_completo);
    localStorage.setItem('nascimento', artigo.dataset.nascimento);

    sessionStorage.setItem('id', artigo.dataset.id);
    sessionStorage.setItem('altura', artigo.dataset.altura);
    sessionStorage.setItem('nome_completo', artigo.dataset.nome_completo);
    sessionStorage.setItem('nascimento', artigo.dataset.nascimento);
    sessionStorage.setItem('dados', JSON.stringify(artigo.dataset));

    console.log(acha_cookie('id'));
    console.log(localStorage.getItem('nome_completo'));
    console.log(JSON.parse(sessionStorage.getItem('dados')));

    window.location = `detalhes_atleta.html?id=${artigo.dataset.id}`;
};

const acha_cookie = (chave) => {
    const lista_de_cookies = document.cookie.split("; ");
    const procurado = lista_de_cookies.find((e) => e.startsWith(chave));
    return procurado ? procurado.split('=')[1] : null;
};

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
};

pega_json(url).then((r) => console.log(r));

pega_json(`${url}/`).then((r) => {
    for (const atleta of r) {
        cria_cartao(atleta);
    }
});

console.log('síncrono');
