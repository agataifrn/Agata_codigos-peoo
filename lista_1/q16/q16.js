/* Implemente uma função que conte quantas palavras existem
em uma string fornecida em um campo de texto de formulário. */

function qntPalavras() {
    let texto = document.getElementById('texto').value;
    let palavra = texto.split(" ");
    let qnt_p = palavra.length;
    document.getElementById("resultado").innerHTML = 
        `Seu texto tem ${qnt_p} palavras.`
}