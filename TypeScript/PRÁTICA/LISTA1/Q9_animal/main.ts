import { Animal } from "./animal";
import { Cachorro } from "./cachorro_gato";
import { Gato } from "./cachorro_gato";

let axolotin = new Animal("Axolote");
let gatin = new Gato("Axolote");
let dogin = new Cachorro("Axolote");

console.log(axolotin.emitirSom());
console.log(gatin.emitirSom());
console.log(dogin.emitirSom());



/* Crie uma classe Animal com um método emitirSom(), que imprime uma mensagem genérica como "Som do animal". 

Crie duas subclasses: Cachorro e Gato, cada uma com sua própria implementação do método emitirSom(), 
com mensagens específicas, como "Latido" para Cachorro e "Miau" para Gato. 

Instancie objetos das três classes (Animal, Cachorro, Gato) 
e chame o método emitirSom() para ver o polimorfismo em ação. */