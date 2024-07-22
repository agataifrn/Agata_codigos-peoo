/* Crie uma função que verifique se uma senha 
inserida em um formulário tem 6 ou mais caracteres. */

function vSenha() {
    const senha = document.getElementById('senha').value;
    if (senha.length >= 6) {
        document.getElementById('resultado').innerHTML = `Senha aprovada!` 
    }
    else
        document.getElementById('resultado').innerHTML = `A senha não tem a quantidade de caracteres sufieciente.`
}
