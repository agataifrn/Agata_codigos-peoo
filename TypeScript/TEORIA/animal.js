var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    // Classe protegida pra ser acessivel só pela subclasse ou a propia classe
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.emitirSom = function () {
        console.log("*Som de ".concat(this.nome));
    };
    Animal.prototype.mover = function (distancia) {
        console.log("".concat(this.nome, " se moveu ").concat(distancia, " metros."));
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(nome, raça) {
        var _this = _super.call(this, nome) || this;
        _this.raça = raça; // Atributo da classe filha
        return _this;
    }
    Cachorro.prototype.emitirSom = function () {
        console.log("au au au au");
    };
    Cachorro.prototype.pegar = function () {
        console.log("pega a bolinha");
    };
    return Cachorro;
}(Animal)); // Subclasse do cachorro
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(nome) {
        return _super.call(this, nome) || this;
    }
    Gato.prototype.emitirSom = function () {
        console.log("miau miau miau miau");
    };
    return Gato;
}(Animal));
var animal = new Animal("Axolote");
animal.emitirSom(); // Saída: *Som de Axolote
animal.mover(20);
var carmelo = new Cachorro("caramelo", "srd");
carmelo.emitirSom(); // Saída: au au au au
carmelo.mover(10);
carmelo.pegar();
var animais = [
    new Animal("Vaca"),
    new Cachorro("Mel", "shitzu"),
    new Gato("Ahron")
];
animais.forEach(function (animal) {
    animal.emitirSom();
});
