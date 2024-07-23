// Verificar se número é primo e dizer os números primos anteriores.

function verificar() {
    const numero = document.getElementById("numero").value;

// Primeiro a parte de se ele é primo:
    // Se o a função retorna verdadeira, imprime que é primo.
    if (primo(numero)) {
        document.getElementById("resultado_res").innerHTML =
            `O número ${numero} é primo.`;
    }
    // Se não, imprime que não é primo.
    else {
        document.getElementById("resultado_res").innerHTML =
            `O número ${numero} não é primo.`;
    }

// Depois, a listagem dos números primos:
    // Forma 1 (com vetores) - 
    let listagem = []
    for (let i = 2; i <= numero; i++) {
        if (primo(i)) 
            listagem.push(i);
        /* Se o indice (i) retornar como verdadeiro da função de testar primos -
        já que todos os números até o último são testados - ele é adicionado numa lista. */
    }
    document.getElementById("resultado_list").innerHTML =
        `Números primos até ${numero}: ${listagem.toString()}`;
    // A lista é adicionada como string na div.

    
    /* Forma 2 (sem vetores) -
    let listagem = document.getElementById("resultado_list");
    listagem.innerHTML = `Números primos até ${numero}: `;
    for (let i = 2; i <= numero; i++) {
        if (primo(i)) {
            listagem.innerHTML = listagem.innerHTML + ` ${i}`;
        }
    }
        // Se o indice (i) retornar como verdadeiro, ele é adicionado na direto na div. 
    */
}

function primo(numero) {
    let resultado = true;
    // Testa se os números de 2 (i = 2) até o número do input tem resto 0.
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            resultado = false;
            break;
            /* Se ele tiver o resto 0, ele quebra do loop e retorna o resultado falso,
            assim não sendo primo. */
        }
    }
    return resultado;
    // Se for verdadeiro, retorna por fora o true
}