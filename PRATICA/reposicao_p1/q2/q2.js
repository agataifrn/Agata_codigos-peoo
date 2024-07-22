// Calcular IMC e dizer sua categoria.

function calcular() {
    const p = document.getElementById("peso").value;
    const h = document.getElementById("altura").value;
    const IMC = p / (h ** 2);

    document.getElementById("IMC_d").innerHTML = 
        `Seu IMC é: ${IMC.toFixed(2)}`

        if (IMC < 18.5) {
            document.getElementById("categoria_d").innerHTML =
                `Categoria: Abaixo do peso`
            }
        else if (IMC <= 24.9) {
            document.getElementById("categoria_d").innerHTML =
                `Categoria: Peso normal`
            }
        else if (IMC <= 29.9) {
            document.getElementById("categoria_d").innerHTML =
                `Categoria: Sobrepeso`
            }
        else {
            document.getElementById("categoria_d").innerHTML =
            `Categoria: Obesidade`
        }

    }
