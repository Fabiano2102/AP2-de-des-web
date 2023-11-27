const senhaCorreta = () => {
    const entrada = document.getElementById("campo-senha").value;
    const senhaCorreta = '10a9c136d796bab18d3e144092a4f20a';

    if (hex_md5(entrada) === senhaCorreta) {
        localStorage.setItem('coiso', 'qualquer valor');
        window.location.href = 'home.html';
    } else {
        alert('Senha incorreta!');
    }
}
