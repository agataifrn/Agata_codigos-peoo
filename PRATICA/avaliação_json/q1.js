const url = `https://api.nobelprize.org/v1/prize.json`;
const resultado = document.getElementById("resultado");
const botao = document.getElementById("botao");

botao.addEventListener("click", () => {
    const ano = document.getElementById("ano").value;
    exibirPremios(ano);
});

function exibirPremios(ano) {
    fetch(`${url}?year=${ano}`)
        .then(resposta => resposta.json())
        .then(dados => {
            resultado.innerHTML = "";

            if (!dados.prizes || dados.prizes.length === 0) {
                resultado.innerHTML = "Nenhum prêmio encontrado para este ano.";
                return;
            }

            dados.prizes.forEach(premio => {
                const categoria = premio.category;
                const motivacao = premio.motivation;
                let laureados = "";
                if (premio.laureates) {
                    for (let i = 0; i < premio.laureates.length; i++) {
                        const laureado = premio.laureates[i];
                        const nome = (laureado.firstname || '') + ' ' + (laureado.surname || '');

                        
                        if (i > 0) {
                            laureados += ", ";
                        }

                        laureados += nome;
                    }
                } else {
                    laureados = "Laureado(s) não disponível(is)";
                }

                const anoDiv = document.createElement('div');
                anoDiv.classList.add('data');
                anoDiv.innerHTML = `<strong>Categoria:</strong> ${categoria} <br><br>
                                    <strong>Laureado(s):</strong> ${laureados} <br><br>
                                    <strong>Motivação:</strong> ${motivacao}<br><br>`;
                
                resultado.appendChild(anoDiv);
            });
        })
        .catch(erro => {
            console.error("Erro ao buscar dados:", erro);
            resultado.innerHTML = "Ocorreu um erro ao buscar os dados.";
        });
}
