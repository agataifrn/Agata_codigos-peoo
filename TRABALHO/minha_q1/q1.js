// Fazer uma requisição para a API e exibir todos os jogos de uma data específica.

function pesquisar_data() {
    let dataEspecifica = ''  // Define a variável da data como vazia.
    dataEspecifica = document.getElementById('data').value;  // Puxa o valor do input (a data do jogo) do HTML.
    const url = "https://worldcupjson.net/matches";

    fetch(url)
    .then(response => response.json()) // Pegou o link do site, e transformou o JSON para objeto JavaScript.
    .then(data => {
        const jogosNaData = data.filter(jogo => jogo.datetime.startsWith(dataEspecifica));  // Filtra o dado específico para saber a data
        document.getElementById('resultado').innerHTML = '';  // Define a div do resultado como vazio.
            if (jogosNaData.length > 0) {
            jogosNaData.forEach(jogo => {
                const jogoInfo = `
                <div>
                    <hr>
                    <h3>Jogo: ${jogo.home_team.name} vs ${jogo.away_team.name}</h3>
                    <p>Data e Hora: ${new Date(jogo.datetime).toLocaleString()}</p>
                    <p>Estádio: ${jogo.venue}</p>
                    <hr>
                </div>
                `;
                document.getElementById('resultado').innerHTML += jogoInfo;
            });  /* Se a quantidade de jogos no dia for maior que zero, 
                    adiciona para cada jogo uma div com suas especificações. */
            } else {
            document.getElementById('resultado').innerHTML = "<p>Nenhum jogo encontrado nesta data.</p>";
            }  // Se não for maior que zero (ou seja, não tiver jogos), exibe mensagem que não tem jogo.
  
    })
    .catch(error => console.error("Erro ao buscar os jogos:", error));  // Mensagem de erro no console.
}