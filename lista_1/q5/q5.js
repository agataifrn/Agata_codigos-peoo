/*Escreva uma função que conte quantas vezes uma letra 
específica aparece em uma string fornecida em um campo de texto. */

function contarL() {
    let frase = document.getElementById("frase").value;
    let letra = document.getElementById("letra").value;
    frase = frase.toLowerCase();
    letra = letra.toLowerCase();

    let contador = 0
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === letra)
            contador++;
    }
    if (contador == 1) {
        document.getElementById('resultado').innerHTML = `A letra "${letra}" apareceu ${contador} vez.` ;
    }
    else 
        document.getElementById('resultado').innerHTML = `A letra "${letra}" apareceu ${contador} vezes.` ;

}