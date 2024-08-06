// JSON é uma linguagem universal que funciona em qualquer linguagem

const pessoa = {
	nome: "João",
	idade: 30,
	profissao: "Desenvolvedor"
};

// Para converter um objeto JavaScript em uma string JSON, usamos JSON.stringify()
const jsonString = JSON.stringify(pessoa);
console.log(jsonString); // SAIDA- {"nome":"João","idade":30,"profissao":"Desenvolvedor"}