/* Escreva uma função que ordene um array de números em ordem crescente ou decrescente, 
baseado em uma seleção do usuário em um formulário. */

function crescente() {
    let numeros = document.getElementById('numeros').value.split(",");
    // Obter o valor do campo de texto com ID 'numeros' e dividir em um array usando a vírgula como separador
    
    numeros.sort((a, b) => a - b);
    /* Ordenar o array em ordem crescente usando o método sort() e uma função de comparação
    A função de comparação compara dois elementos e retorna um valor negativo se o primeiro elemento for menor que o segundo */

    document.getElementById("resultado").innerHTML = `Array ordenado em ordem crescente: ${numeros}`;
}

function decrescente() {
    let numeros = document.getElementById('numeros').value.split(",");
    numeros.sort((a, b) => b - a);
    /* Ordenar o array em ordem decrescente usando o método sort() e uma função de comparação
    A função de comparação compara dois elementos e retorna um valor positivo se o primeiro elemento for maior que o segundo */

    document.getElementById("resultado").innerHTML = `Array ordenado em ordem decrescente: ${numeros}`;
}