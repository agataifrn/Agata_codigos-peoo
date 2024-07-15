const numeros = [2, 3, 7, 8, 10];
// O toString() faz o vetor aparecer no formato de string
console.log(numeros.toString()); // Saída: "2,3,7,8,10"

/* TRANFORMAR
O método map() serve pra aplicar uma função em todos os vetores. */
const quadrados = numeros.map(function(num) {
    return num ** 2;
});
console.log(quadrados.toString()); // Saída: "4,9,49,64,100"

/* FILTRAR
O método filter() cria um novo array com todos os elementos que passam no filtro definido. */
let resultado = numeros.filter(function(num) {
    return num > 5;
})
console.log(resultado.toString()); // Saída: "7,8,10"

/* REDUZIR
O método reduce() "acumula" os elemento do array (da esquerda para a direita), resultando em um único valor. */
resultado = numeros.reduce(function(total, num) {
    return total * num;
}, 1);
// esse 1 é o valor neutro/valor inicial.
console.log(resultado.toString()); // Saída: "3360"

