/* Implemente uma função que some todos 
os números de um array fornecido em um campo de texto de formulário. */

function somar() {
    let numeros = document.getElementById('numeros').value.split(" ").map(Number);
    let soma = numeros.reduce((acc, val) => acc + val, 0);
    /* Usar o método reduce() para somar todos os elementos do array
    O "acc" é a junção dos valores do array, e o "val" o valor atual escolhido, no caso zero
    Então o reduce junta os dois e dá a soma */

    document.getElementById('resultado').innerHTML =
        `A soma dos números é: ${soma}`
}