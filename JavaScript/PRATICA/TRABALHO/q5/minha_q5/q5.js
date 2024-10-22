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
    
  
  }
  
  