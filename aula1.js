console.log('Oi, tudo bem!'); 
// Coloca uma informção no console;
alert("Escrevendo no navegador");
// Aparece um alerta no site;
let dia = prompt("Que dia é hoje?");
// Pega o input que o usuário escrever;
console.log("Hoje é " + dia);
alert("Hoje é " + dia);
document.querySelector('#dia').innerHTML = 'Hoje é ' + dia;
// Três formas de aparecer o input que o site pegou;
// A