
function calcularD() {
    // Obtém as coordenadas x e y do primeiro ponto inseridas pelo usuário
    const x1 = document.getElementById('x1').value;
    const y1 = document.getElementById('y1').value;
    // Obtém as coordenadas x e y do segundo ponto inseridas pelo usuário
    const x2 = document.getElementById('x2').value;
    const y2 = document.getElementById('y2').value;

    // Calcula a distância euclidiana entre os dois pontos
    const dist = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

    // Exibe o resultado na div com id "resultado"
    document.getElementById('resultado').innerHTML = 
    `A distância entre P1(${x1}, ${y1}) e P2(${x2}, ${y2})
     é igual a <b>${dist.toFixed(2)}</b>`;
    // Coloca o resultado em negrito com o "<b></b>""
}