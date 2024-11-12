class Animal {
    protected nome: string;
    // Classe protegida pra ser acessivel só pela subclasse ou a propia classe

    constructor(nome: string) {
        this.nome = nome;
    }

    emitirSom(): void {
        console.log(`*Som de ${this.nome}`);
    }
    
    public mover(distancia: number): void {
		    console.log(`${this.nome} se moveu ${distancia} metros.`);
	  }
}

class Cachorro extends Animal {
    private raça : string;

    constructor(nome: string, raça : string) {
        super(nome);
        this.raça = raça; // Atributo da classe filha
    }
    emitirSom(): void {
        console.log("au au au au");
    }
    pegar(): void {
        console.log("pega a bolinha")
    }
} // Subclasse do cachorro

class Gato extends Animal {
    constructor(nome: string) {
        super(nome);
    }
    emitirSom(): void {
        console.log("miau miau miau miau");
    }
}

let animal = new Animal("Axolote")
animal.emitirSom(); // Saída: *Som de Axolote
animal.mover(20);

let carmelo = new Cachorro("caramelo", "srd");
carmelo.emitirSom(); // Saída: au au au au
carmelo.mover(10);
carmelo.pegar();

let animais : Animal[] = [
    new Animal("Vaca"),
    new Cachorro("Mel","shitzu"),
    new Gato("Ahron")
];
animais.forEach(animal => {
    animal.emitirSom();
});
