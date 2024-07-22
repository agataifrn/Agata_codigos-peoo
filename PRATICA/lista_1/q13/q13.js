/* Desenvolva uma função que remova todos os espaços em branco 
de uma string fornecida em um campo de texto de formulário. */

function tirarE() {
    const string = document.getElementById('string').value;
    const n_string = string.split(" ").join("")
    document.getElementById("resultado").innerHTML =
        `Sua string sem espaços: ${n_string}`
}