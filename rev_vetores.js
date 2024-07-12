let frutas = ["abacate", "tamarindo", "cajá", "tomate"]

// Adiciona um item no início do array.
frutas.unshift("laranja")
// Adiciona no final do array um item.
frutas.push("melão")


// Exclui um item no início do array.
frutas.shift()
// Exclui no final do array um item.
frutas.pop()


// Serve para excluir um item do array.
frutas.splice(1, 2);
/* Ou para adicinar strings (primeiro número é a posição/índice, 
o segundo um item a ser excluiído) */
frutas.splice(2, 1, "uva", "maçã");

console.log(frutas); 