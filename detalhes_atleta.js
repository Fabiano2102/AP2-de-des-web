const detalhesContainer = document.getElementById('detalhes-container');

const exibir_detalhes_atleta = (dados) => {
    const detalhesImagem = document.createElement("img");
    detalhesImagem.src = dados.imagem;
    detalhesImagem.alt = `foto de ${dados.nome}`;

    detalhesContainer.appendChild(detalhesImagem);

};

const perfil_jogador = () => {
    detalhesContainer.innerHTML =` 

        <p>Descrição: ${localStorage.getItem('descricao')}</p>
        <p>Altura: ${localStorage.getItem('altura')}</p>
        <p>Nascimento: ${localStorage.getItem('nascimento')}</p>
        <p>Nome: ${localStorage.getItem('nome_completo')}</p>

    
    `;
};

perfil_jogador();

const obter_detalhe_atleta = async () => {
    const endpoint = `https://botafogo-atletas.mange.li/${localStorage.getItem('id')}`;

    try {
        const resposta = await fetch(endpoint);
        const dados = await resposta.json();

        exibir_detalhes_atleta(dados);
    } catch (error) {
        console.error("Erro ao obter detalhes do atleta:", error);
    }
};

document.addEventListener("DOMContentLoaded", function () {

    obter_detalhe_atleta();
});

const voltar = () => {
    const exit = document.querySelector('footer');
  
    const btnVoltar = document.createElement('a');
    btnVoltar.href = 'home.html';
    
  
    exit.appendChild(sai);
  };
  
  voltar();