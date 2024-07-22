/* Escreva uma função que verifique se uma string inserida
em um campo de texto é um palíndromo. */

function checarP() {
    let p = document.getElementById('palavra').value;
    p = p.toLowerCase();
    
    let p_reverse = p.split('').reverse().join('');

    if (p === p_reverse) {
        document.getElementById("resultado").innerHTML = 
            `"${p}" é palíndromo.`;
    }
    else
        document.getElementById("resultado").innerHTML = 
        `"${p}" não é palíndromo.`;
}