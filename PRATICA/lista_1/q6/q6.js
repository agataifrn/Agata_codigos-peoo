/* Desenvolva um script que troque a cor do texto de um parágrafo HTML ao clicar em um botão. */
 
function trocaCor() {
    const cor = document.getElementById("cores").value;
    document.getElementById("texto").style.color = cor;
}