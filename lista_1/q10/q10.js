/* Escreva uma função que ordene um array de números em ordem crescente ou decrescente, 
baseado em uma seleção do usuário em um formulário. */

function crescente() { 
    let numeros = document.getElementById('numeros').value.split(",");
    numeros.sort((a, b) => a - b);
    document.getElementById("resultado").innerHTML = `Array ordenado em ordem crescente: ${numeros}`;
}

function decrescente() {
    let numeros = document.getElementById('numeros').value.split(",");
    numeros.sort((a, b) => b - a);
    document.getElementById("resultado").innerHTML = `Array ordenado em ordem decrescente: ${numeros}`;
}