/* Crie uma função que calcule a idade de uma pessoa com
base na data de nascimento fornecida em um campo de formulário. */

function calcularIdade() {
    // Obtém a data de nascimento do campo de formulário com id "data"
    let dataNascimento = document.getElementById("data").value;
    
    // Divide a data de nascimento em partes, separadas pelo caractere "/"
    let partesData = dataNascimento.split("/");
    
    // Converte as partes da data de nascimento em números inteiros
    let diaNascimento = parseInt(partesData[0]);
    let mesNascimento = parseInt(partesData[1]);
    let anoNascimento = parseInt(partesData[2]);

    // Obtém a data atual
    let hoje = new Date();
    let anoAtual = hoje.getFullYear();
    let mesAtual = hoje.getMonth() + 1; // O mês começa de 0 (janeiro) a 11 (dezembro)
    let diaAtual = hoje.getDate();

    // Calcula a idade subtraindo o ano de nascimento do ano atual
    let idade = anoAtual - anoNascimento;

    // Verifica se o aniversário da pessoa já ocorreu neste ano
    // Se ainda não ocorreu, diminui a idade em 1
    if (mesAtual < mesNascimento || 
       (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }
    
    // Exibe a idade calculada no elemento HTML com id "idade"
    document.getElementById("idade").innerHTML = `Idade: ${idade}`;
}