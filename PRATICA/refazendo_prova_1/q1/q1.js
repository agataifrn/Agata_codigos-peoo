// Repetir string a quantidade de vezes que o usuário pedir.

function repetir() {
    frase = document.getElementById("frase").value;
    qnt = document.getElementById("qnt").value;

    document.getElementById("resultado").innerHTML = "";

    for (let i = 0; i < qnt; i++) {
    document.getElementById("resultado").innerHTML += 
        `${frase} <br> `;
    }
}