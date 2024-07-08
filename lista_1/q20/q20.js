/* 20. Crie um formulário de cadastro que inclua campos para nome, e-mail, 
senha e confirmação de senha. Implemente uma função JavaScript que valide:
- Se todos os campos foram preenchidos.
- Se o e-mail contém um "@" e um ponto.
- Se a senha tem pelo menos 8 caracteres e inclui números e letras.
- Se a senha e a confirmação de senha são iguais.

Exiba mensagens de erro específicas para cada validação que falhar. */

function validarDados() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let c_senha = document.getElementById("confirme_senha").value;

    let nome_v = false
    let email_v = false
    let senha_v = false
    let c_senha_v = false

    // Conferir se todos os campos foram preenchidos
        if (nome.lenght >= 1) {
            nome_v = true
        }
        if (email.lenght >= 1) {
            email_v = true
        }
        if (senha.lenght >= 1) {
            senha_v = true
        }
        if (c_senha.lenght >= 1) {
            c_senha_v = true
        }
        let valido1 = (nome_v, email_v, senha_v, c_senha_v)

        if (valido1 = false) {
            
        }


}