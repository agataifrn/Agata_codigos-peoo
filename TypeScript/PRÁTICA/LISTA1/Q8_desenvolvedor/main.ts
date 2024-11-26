import { Desenvolvedor } from "./desenvolvedor";

const devJunior = new Desenvolvedor('Alice Costa', 3000, 'Junior');
console.log(devJunior.descricao());
devJunior.promover();

const devPleno = new Desenvolvedor('Bruno Souza', 5000, 'Pleno');
console.log(devPleno.descricao());
devPleno.promover();

const devSenior = new Desenvolvedor('Joana Teles', 8000, 'Senior');
console.log(devSenior.descricao());
devSenior.promover();


/* Crie uma classe Funcionario com propriedades nome (string) e salario (number). 

Defina o salario como uma propriedade protegida (protected) para que possa ser acessada por subclasses. 

Crie uma subclasse Desenvolvedor com uma propriedade adicional nivel (string), 
que pode ser "Junior", "Pleno", ou "Senior". 

Adicione um método promover() que aumenta o salário do Desenvolvedor baseado em seu nível, 
aplicando uma taxa maior para níveis mais altos. Crie instâncias e teste a promoção em diferentes níveis, 
verificando o acesso ao salario através da herança. */