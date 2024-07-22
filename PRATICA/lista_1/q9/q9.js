/* Desenvolva uma função que calcule a área de um retângulo, 
usando valores de altura e largura inseridos em um formulário. */

function aRetangulo() {
    const h = document.getElementById('altura').value;
    const L = document.getElementById('largura').value;
    let A = L * h
    document.getElementById('resultado').innerHTML = 
        `A área desse retângulo é de ${A} metros quadrados.`
}