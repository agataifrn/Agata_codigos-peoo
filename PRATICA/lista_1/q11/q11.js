/* Crie uma função que encontre o maior número em um
array inserido através de um campo de texto de formulário. */

function acharM() {
    let numeros = document.getElementById('numeros').value.split(",");
    let maior = Math.max(...numeros)
    // Essa função do math serve para achar o maior número
    document.getElementById('resultado').innerHTML =
        `O maior número é: ${maior}`
}