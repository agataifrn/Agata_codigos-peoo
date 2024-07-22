
function repetirF() {
    const frase = document.getElementById('frase').value;
    let n = document.getElementById('numero').value;

    document.getElementById('resultado').innerHTML = "";
    // Limpa o conteúdo da div resultado
    
    // Loop que repete a frase o número de vezes especificado
    for (let i = 0; i < n; i++) {
        // Adiciona a frase seguida de uma quebra de linha à div resultado
        document.getElementById('resultado').innerHTML += 
            `${frase} <br>`; 
    }
}