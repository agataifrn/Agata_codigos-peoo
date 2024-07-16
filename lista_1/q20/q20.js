/* 20. Crie um formulário de cadastro que inclua campos para nome, e-mail, 
senha e confirmação de senha. Implemente uma função JavaScript que valide:
- Se todos os campos foram preenchidos.
- Se o e-mail contém um "@" e um ponto.
- Se a senha tem pelo menos 8 caracteres e inclui números e letras.
- Se a senha e a confirmação de senha são iguais.

Exiba mensagens de erro específicas para cada validação que falhar. */


function validarDados() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const c_senha = document.getElementById("confirme_senha").value;

    let resultado = document.getElementById('resultado')

    // A exclamação significa "not" 
    if (!nome)
        resultado.innerHTML = '<b>Preencha o nome</b>';
    else if (!email)
        resultado.innerHTML = '<b>Preencha o email</b>';
    else if (!senha || !c_senha)
        resultado.innerHTML = '<b>Preencha a senha</b>';
    else if (senha != c_senha)
        resultado.innerHTML = '<b>Senhas diferentes</b>';
    else if (!nome)
        resultado.innerHTML = '<b></b>';
    else if (!nome)
        resultado.innerHTML = '<b></b>';
    else if (!nome)
        resultado.innerHTML = '<b></b>';


}

function conferirSenha() {
    // Usando regex (expressão regular), testa a quantidade de letras, se tem números e letras
    const testarQuant = senha.length >= 8;
    const testarLetras = /[a-zA-Z]/;
    const testarNúmeros = /\d/;

    return testarQuant && testarLetras && testarNúmeros;

}
