/* Crie uma função que valide se o campo 
de e-mail inserido em um formulário contém um "@" e um ponto ".". */

function vEmail() {
    let email = document.getElementById("email").value;
    // Obtém o valor do campo de e-mail.

    if (email.includes(".") && email.includes("@"))
    // Verifica se o e-mail contém tanto "." quanto "@"
        document.getElementById('validacao').innerHTML = "Seu E-Mail é válido.";
        // Se o e-mail for válido, exibe uma mensagem de validação.
    else
        document.getElementById('validacao').innerHTML = "Seu E-Mail é inválido.";
        // Se o e-mail for inválido, exibe uma mensagem de erro.
}