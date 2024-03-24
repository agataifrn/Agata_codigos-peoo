/*Escreva uma função que conte quantas vezes uma letra 
específica aparece em uma string fornecida em um campo de texto. */

function contarL() {
    let frase = document.getElementById("frase").value;
    let letra = document.getElementById("letra").value;
    // Obtém o valor da frase e da letra digitados pelo usuário

    frase = frase.toLowerCase();
    letra = letra.toLowerCase();
    // Converte a frase e a letra para minúsculas para tornar a comparação case-insensitive

    let contador = 0;
    // Inicializa o contador de ocorrências da letra na frase

    for (let i = 0; i < frase.length; i++) {
    // Percorre cada caractere da frase, contando quantos caracteres tem na frase pelo ".length"
        if (frase[i] === letra)
            contador++;
        /* Se o caractere atual for igual à letra desejada, incrementa o contador
        O "contador++" é a mesma coisa que escrever "contador = contador + 1" */
    }

    if (contador == 1) {
        // Verifica se a letra apareceu apenas uma vez e atualiza a exibição do resultado de acordo
        document.getElementById('resultado').innerHTML = `A letra "${letra}" apareceu ${contador} vez.` ;
    } 
    else {
        document.getElementById('resultado').innerHTML = `A letra "${letra}" apareceu ${contador} vezes.` ;
        // Caso contrário, atualiza a exibição do resultado indicando que a letra apareceu várias vezes
    }
}