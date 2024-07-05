// Pedir nome e sobrenome e exibir os dois juntos

function juntarNome() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;

    let nomec = nome + ' ' + sobrenome

    document.getElementById('nomec').innerHTML = `Nome Completo: ${nomec} `

}