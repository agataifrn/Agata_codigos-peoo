"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Funcionario_1 = require("./Funcionario");
var Gerente_1 = require("./Gerente");
var Empresa_1 = require("./Empresa");
var funcio1 = new Funcionario_1.Funcionario('Joao', 'Programador', 2000);
var funcio2 = new Funcionario_1.Funcionario('Pedro', 'Tecnico', 2500);
var funcio3 = new Funcionario_1.Funcionario('Lucas', 'Orientador', 3000);
var gere1 = new Gerente_1.Gerente('Maria', 'Programadora Plena', 4000, 500);
var gere2 = new Gerente_1.Gerente('Maria', 'Programadora Senior', 4500, 250);
var lista_funcionarios = [funcio1, funcio2, gere1, gere2];
var empre = new Empresa_1.Empresa("Tech Soluções");
empre.adicionarFuncionarios(lista_funcionarios);
empre.adicionarFuncionario(funcio3);
empre.listarFuncionarios();
funcio1.aplicarAumento(10);
funcio2.aplicarAumento(20);
gere1.aplicarAumento(5);
gere2.aplicarAumento_bonus(200);
empre.listarFuncionarios();
/* No arquivo Main.ts, crie uma instância da classe Empresa com o nome “Tech Soluções” X

e adicione três funcionários e dois gerentes (nomes, cargos e valores a seu critério).
Liste todos os funcionários da empresa. X

Aumente o salário em 10% de um dos funcionários
e 15% de outro funcionário. X

Aumente o salário em 10% de um gerente e altere para cima
o bônus do outro gerente. X

Por fim, liste novamente todos os funcionários para exibir as
modificações X */ 
