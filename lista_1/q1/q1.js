/* Crie uma função que calcule a idade de uma pessoa com
base na data de nascimento fornecida em um campo de formulário. */

function calcularIdade1() {
    let dataNascimento = document.querySelector("#data").value;
    let partesData = dataNascimento.split("/");
    let diaNascimento = parseInt(partesData[0]);
    let mesNascimento = parseInt(partesData[1]);
    let anoNascimento = parseInt(partesData[2]);
    // O split cria uma lista com cada número, dividindo a partir do "/"

    let hoje = new Date();
    let anoAtual = hoje.getFullYear();
    let mesAtual = hoje.getMonth() + 1;
    let diaAtual = hoje.getDate();

    let idade = anoAtual - anoNascimento;

    if (mesAtual < mesNascimento || 
       (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }
    document.querySelector("#idade").innerHTML = `Idade: ${idade}`;
}