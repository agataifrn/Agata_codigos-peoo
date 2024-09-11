let dataFinal = '2022-12-18'; 

        function mostrar_vencedor(data) {
            const final = data.filter(jogo => jogo.datetime.startsWith(dataFinal));

            document.getElementById('resultado').innerHTML = '';

            if (final.length === 1) {
                const jogo = final[0]; 
                const vencedor = jogo.winner
                
                const finalInfo = `
                <div> 
                    <hr>
                    <h3>Final: ${jogo.home_team.name} vs ${jogo.away_team.name}</h3>
                    <h3>Data e Hora: ${new Date(jogo.datetime).toLocaleString()}</h3>
                    <h2>Vencedor: ${vencedor}</h2>
                    <hr>
                </div>`;

                document.getElementById('resultado').innerHTML = finalInfo;
            } else {
                document.getElementById('resultado').innerHTML = "<p>Nenhum jogo encontrado nesta data.</p>";
            }
        }

        function pesquisar_data() {
            const url = "https://worldcupjson.net/matches";

            fetch(url)
                .then(response => response.json()) 
                .then(data => mostrar_vencedor(data)) 
                .catch(error => console.error("Erro ao buscar os jogos:", error)); 
        }
   