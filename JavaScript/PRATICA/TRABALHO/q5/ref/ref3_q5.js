// QUESTÃO: Fazer uma requisição para a API e exibir o resultado final da Copa do Mundo, incluindo o campeão e o vice-campeão.

function puxar_Final() {
    const url = 'https://worldcupjson.net/matches'
  
    fetch(url)
      .then(response => response.json())
      .then(data => {mostrar_final(data.at(-1))})
      .catch(error => console.error("Erro ao buscar os jogos:", error));  // Mensagem de erro no console.
  }  // Faz requesição para a API, e puxa a função principal.
  
  function mostrar_final(match) {
    const resultado = document.getElementById("resultado")
    resultado.innerHTML = '';
  
    const data = new Date(match.datetime);
    
    resultado.innerHTML = `
    <div> 
      <hr>
  
      <h1> ${match.winner} VS ${match.away_team.name}</h1>
      <h2> Campeão: ${match.winner} - Vice Campeão: ${match.away_team.name} </h2> <br>
  
      <h2> Detalhes da Partida: </h2>
        <p>Data: ${data.toLocaleDateString()}</p> 
        <p>Hora: ${data.toLocaleTimeString()}</p>
        <p>Localização: Estádio ${match.venue}, ${match.location}</p>
        <p>Público: ${match.attendance} pessoas</p>
        <h3>Gols e Penalidades:</h3>
          <img src= "https://flagpedia.net/data/flags/h80/ar.png" alt="${match.home_team.country}" class="flag">
            <h4>${match.home_team.name}:</h4>
            ${match.home_team.goals} gols, ${match.home_team.penalties} penalidades <p>
            <br> 
          <img src="https://flagpedia.net/data/flags/h80/fr.png" alt="${match.away_team.country}" class="flag"> 
            <h4>${match.away_team.name}:</h4>
            ${match.away_team.goals} gols, ${match.away_team.penalties} penalidades <p>
            <br> 
        <h3>Resultado Final:</h3>
        <p><b>Gols: </b> ${match.home_team.goals} - ${match.away_team.goals}</p>
        <p><b>Penalidades: </b> ${match.home_team.penalties} - ${match.away_team.penalties} </p>
        
      <hr>
    </div>
    `
  } 