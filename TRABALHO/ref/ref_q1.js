let dataEspecifica =''
document.getElementById('forms').onsubmit = 

function(event) {
    event.preventDefault();
dataEspecifica = document.getElementById('data').value;

const url = "https://worldcupjson.net/matches";
fetch(url)
  .then(response => response.json()) 
  .then(data => {
    const jogosNaData = data.filter(jogo => jogo.datetime.startsWith(dataEspecifica));
    document.getElementById('resultado').innerHTML = '';

    if (jogosNaData.length > 0) {
      jogosNaData.forEach(jogo => {
        const jogoInfo = `
          <div>
            <h3>Jogo: ${jogo.home_team.name} vs ${jogo.away_team.name}</h3>
            <p>Data e Hora: ${new Date(jogo.datetime).toLocaleString()}</p>
            <p>Estádio: ${jogo.venue}</p>
            <hr>
          </div>
        `;
        document.getElementById('resultado').innerHTML += jogoInfo;
      });
    } else {
      document.getElementById('resultado').innerHTML = "<p>Nenhum jogo encontrado nesta data.</p>";
    }
  })
  .catch(error => console.error("Erro ao buscar os jogos:", error));
}