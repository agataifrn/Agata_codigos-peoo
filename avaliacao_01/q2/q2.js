
function calcularD() {
    const x1 = document.getElementById('x1').value;
    const y1 = document.getElementById('y1').value;
    const x2 = document.getElementById('x2').value;
    const y2 = document.getElementById('y2').value;

    const dist = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

    document.getElementById('resultado').innerHTML = 
    `A distância entre P1(${x1}, ${y1}) e P2(${x2}, ${y2})
     é igual a <b>${dist.toFixed(2)}</b>`;
}