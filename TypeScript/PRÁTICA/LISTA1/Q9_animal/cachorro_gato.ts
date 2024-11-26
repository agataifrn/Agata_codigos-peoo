import { Animal } from "./animal";

export class Cachorro extends Animal {
    constructor(nome: string) {
        super(nome);
    }

    emitirSom() : string {
        return `O cachorro faz: AUAUAAUAUAUAAUUAUAUAUA`;
    }

}

export class Gato extends Animal {
    constructor(nome: string) {
        super(nome);
    }

    emitirSom() : string {
        return `O gato faz: MIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU`;
    }

}


/* Crie duas subclasses: Cachorro e Gato, cada uma com sua própria implementação do método emitirSom(), 
com mensagens específicas, como "Latido" para Cachorro e "Miau" para Gato.  */