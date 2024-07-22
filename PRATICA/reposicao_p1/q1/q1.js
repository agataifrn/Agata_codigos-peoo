// Verificar se número é primo e dizer os números primos anteriores.

function verificar() {
    let n = document.getElementById("n").value;

        if (n == 2) {
            document.getElementById("resultado1").innerHTML =
                `O número ${n} é primo.`
        }
        else if (n%2 == 0) {
            document.getElementById("resultado1").innerHTML =
                `O número ${n} não é primo.`
        }
        else {
            document.getElementById("resultado1").innerHTML =
                `O número ${n} é primo.`
        }

        // não consegui fazer a parte do "for", perdao </3

    }