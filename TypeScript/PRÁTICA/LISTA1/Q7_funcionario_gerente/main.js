"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var funcionario_1 = require("./funcionario");
var gerente_1 = require("./gerente");
var meuFuncionario = new funcionario_1.Funcionario("Jõao", 2532.99);
var meuGerente = new gerente_1.Gerente("Pedro", 2532.99, 3000);
console.log(meuFuncionario.descricao());
console.log(meuGerente.descricao());
/* Crie uma classe Funcionario com propriedades nome (string) e salario (number).
Crie uma classe Gerente que herda de Funcionario e possui uma propriedade adicional bonus (number).
Adicione um método na classe Gerente chamado calcularSalarioTotal() que retorna a soma do salário com o bônus.
Crie instâncias de Funcionario e Gerente para testar o comportamento e verifique se a herança está funcionando corretamente. */ 
