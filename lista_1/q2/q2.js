/* Desenvolva uma função que converta graus Celsius em Fahrenheit, 
baseando-se em um valor inserido em um formulário. */

function converterT() {
    const c = document.getElementById("celsius").value;
    let f = c * (18/10) + 32
    document.getElementById('resultado').innerHTML = c + "°C = " + f + "°F";
}    