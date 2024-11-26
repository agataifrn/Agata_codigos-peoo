import { Funcionario } from "./Funcionario";
import { Gerente } from "./Gerente";
import { Empresa } from "./Empresa";

let funcio1 = new Funcionario('Joao', 'Programador', 2000);
let funcio2 = new Funcionario('Pedro', 'Tecnico', 2500);
let funcio3 = new Funcionario('Lucas', 'Orientador', 3000);
let gere1 = new Gerente('Maria', 'Programadora Plena', 4000, 500);
let gere2 = new Gerente('Maria', 'Programadora Senior', 4500, 250);

let lista_funcionarios : Funcionario[] = [funcio1, funcio2, gere1, gere2];
let empre = new Empresa("Tech Soluções");
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