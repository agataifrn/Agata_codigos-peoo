/* Implemente uma função que crie 
uma saudação personalizada, usando o nome fornecido em um campo de formulário. */

function saudar() {
    const nome = document.getElementById('nome').value;
    document.getElementById('resultado').innerHTML = `Olá ${nome}, é um prazer te conhecer!`
}