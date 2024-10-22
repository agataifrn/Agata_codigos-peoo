//  Strings - formas de usar
let msg1 = "String com aspas duplas";
let msg2 = 'String com aspas simples';
let msg3 = `String com crase`;
    // com crase pode ter linhas múltiplas

console.log(msg1);
console.log(msg2);
console.log(msg3);
// isso para printar as strings

const nome = 'Fulano';
const idade = 15;

console.log(nome + ' tem ' + idade + ' anos de idade.');
console.log(`${nome} tem ${idade} anos de idade.`);
// para printar a variável na string

console.log(typeof(msg1));
console.log(typeof(idade));
// typeof indica o tipo de variável, nesse caso do console.log vai printar

let nota = 9.5;
console.log(typeof(nota));

console.log(5 == 5);
console.log(5 === 5);
console.log(5 == '5');
console.log(5 === '5');
/* 
igual duplo compara conteúdo 
igual triplo compara conteúdo e tipo
no 4 caso como tá comparando com a string, não é o mesmo tipo então é falso
*/

// && é o AND
console.log(true && false);
console.log(1 && 1);
console.log(1 || 0);
// || é o or