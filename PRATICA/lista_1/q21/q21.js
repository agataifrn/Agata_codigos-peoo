/* Desenvolva um formulário para cadastro de produtos que inclua nome do produto, 
preço, categoria (dropdown com opções pré-definidas) e descrição. 
Crie uma função JavaScript que adicione cada produto cadastrado a uma tabela HTML
abaixo do formulário, atualizando-a dinamicamente a cada novo cadastro. */

function cadastrar() {
    const nome = document.getElementById("nome").value
    const preco = document.getElementById("preco").value
    const categoria = document.getElementById("categoria").value
    const descricao = document.getElementById("descricao").value

    let linha = document.getElementById("tabela").insertRow();
    linha.insertCell(0).textContent = nome;
    linha.insertCell(1).textContent = preco;
    linha.insertCell(2).textContent = categoria;
    linha.insertCell(3).textContent = descricao;

    document.getElementById('formProduto').reset();
} 