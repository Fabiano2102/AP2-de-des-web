function mostrarOpcoes() {
    var opcoesElenco = document.getElementById('opcoesElenco');
    opcoesElenco.style.display = 'block';
}

function redirecionarParaElenco() {
    var elencoSelecionado = document.getElementById('elencoSelecionado');
    var paginaSelecionada = elencoSelecionado.value;
    window.location.href = paginaSelecionada;
}
