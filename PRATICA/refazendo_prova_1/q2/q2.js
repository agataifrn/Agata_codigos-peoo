// Calcular distância de dois pontos cartesianos.

function calcular() {
    let x1 = document.getElementById("x1").value;
    let y1 = document.getElementById("y1").value;
    let x2 = document.getElementById("x2").value;
    let y2 = document.getElementById("y2").value;

    let d = Math.sqrt( ((x2 - x1)**2) + ((y2 - y1)**2) );

    document.getElementById("resultado").innerHTML =
        `A distância entre P1(${x1}, ${y1}) e P2(${x2}, ${y2}) 
        é igual a <b>${d.toFixed(2)}</b>`

}