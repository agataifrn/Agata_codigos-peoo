/* Implemente uma função que verifique 
se um número inserido em um formulário é par ou ímpar e exiba o resultado. */

function verificar() {
    const n = document.getElementById("numero").value;
    if (n %2 == 0) {
        document.getElementById('resultado').innerHTML = n + " é par.";
    }
    else {
        document.getElementById('resultado').innerHTML = n + " é impar.";
    }
}