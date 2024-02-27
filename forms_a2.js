function submeterFormulario() {
    let confirma = confirm("Você confirma a ação?");
    if(confirma == true) {
        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        // pega o elemento da caixa pelo id
        // tem que especificar esse "value" pra ele pegar a informação de dentro da caixa
        document.getElementById("resultado").innerHTML = 
            "<h3>Informações Recebidas</h3>" +
            // o número no "h3" é o tamanho do texto
            "<p>Nome: " + nome + "</p>" +
            "<p>E-mail: " + email + "</p>";
        // escreve isso dentro daquela div (a caixinha virtual)
    }
else {
    document.getElementById("resultado").innerHTML =
    "<h2>Ação cancelada</h2>";
    }
// se der "false", ele cancela a ação
}