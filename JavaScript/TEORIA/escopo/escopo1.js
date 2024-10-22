let cor = "azul"; 

function mostrarCor() {
	let cor = "vermelha"; 
	return cor; 
}

function mostrarOutraCor() {
	let cor = "bege"; 
	return cor; 
}

console.log("Fora da função:", cor);
console.log("Dentro da função:", mostrarCor());
console.log("Dentro da função:", mostrarOutraCor());

