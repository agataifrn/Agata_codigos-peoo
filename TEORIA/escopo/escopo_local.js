let cor = "azul"; // Escopo global

function mostrarCor() {
	let cor = "vermelha"; // Escopo de função (local)
	return cor; // Saída: vermelha
}

console.log(mostrarCor());
console.log(cor); // Saída: azul

