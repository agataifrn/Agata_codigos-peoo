function calculoIMC() {
    const massa = document.getElementById("massa").value;
    const altura = document.getElementById("altura").value;
    const IMC = massa / (altura ** 2);
    // faz o calculo com os inputs e devolve o valor
    // tem que especificar esse "value" pra ele pegar a informação de dentro da caixa
    document.getElementById("resultado").innerHTML = 
        "<h3>Seu IMC:</h3>" +
        "<p>" + IMC.toFixed(2) + "</p>";
    // escreve o valor do IMC dentro da div (caixinha virtual)
    // toFixed serve para arredondar o resultado
}