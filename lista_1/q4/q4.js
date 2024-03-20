// Função para validar o campo de e-mail
function vEmail() {
    // Obtém o valor do campo de e-mail
    let email = document.getElementById("email").value;

    // Verifica se o e-mail contém tanto "." quanto "@"
    if (email.includes(".") && email.includes("@"))
        // Se o e-mail for válido, exibe uma mensagem de validação
        document.getElementById('validacao').innerHTML = "Seu E-Mail é válido.";
    else
        // Se o e-mail for inválido, exibe uma mensagem de erro
        document.getElementById('validacao').innerHTML = "Seu E-Mail é inválido.";
}