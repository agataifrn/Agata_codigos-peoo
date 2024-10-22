const resultadoDiv = document.getElementById('resultado');

function consultarFeriados() {
    const ano = document.getElementById('ano').value;
    const urlApi = `https://brasilapi.com.br/api/feriados/v1/${ano}`;
    
    fetch(urlApi)
        .then(resposta => resposta.json())
        .then(dados => {
            if (dados.length === 0) {
                resultadoDiv.innerHTML = '<p>Não foram encontrados feriados para o ano especificado.</p>';
            } else {
                mostrarFeriados(dados, ano);
            }
        })
        .catch(erro => {
            console.error("Erro ao buscar os feriados:", erro);
            resultadoDiv.innerHTML = '<p>Ocorreu um erro ao consultar os dados.</p>';
        });
}

function mostrarFeriados(feriados, ano) {
    const meses = {};
    const nomesMeses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    feriados.forEach(feriado => {
        const data = new Date(feriado.date);
        const dia = data.getUTCDate();
        const mes = nomesMeses[data.getUTCMonth()];
        const descricao = feriado.name;

        if (!meses[mes]) {
            meses[mes] = [];
        }
        meses[mes].push(`${dia} de ${mes} - ${descricao}`);
    });

    resultadoDiv.innerHTML = `
    <h2>Feriados Nacionais de ${ano}</h2> 
    <p>Total de Feriados: ${feriados.length}</p>
    `;

    for (const mes in meses) {
        if (meses[mes].length > 0) {
            resultadoDiv.innerHTML += `<h3>${mes} (${meses[mes].length} feriado(s))</h3>`;
            resultadoDiv.innerHTML += `<ul>${meses[mes].map(feriado => `<li>${feriado}</li>`).join('')}</ul>`;
        }
    }
}