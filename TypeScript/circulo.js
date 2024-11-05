var circulo = /** @class */ (function () {
    // Classe (com atributos privados, para nao poder acessar nem alterar)
    function circulo(raio, x, y) {
        this.raio = raio;
        this.x = x;
        this.y = y;
    } // Molde da classe pra criar objeto
    circulo.prototype.getRaio = function () {
        return this.raio;
    }; // Metódo getter
    circulo.prototype.setRaio = function (r) {
        if (r <= 0)
            console.log('Não dá pra ter raio negativo!!');
        else if (r > 15)
            console.log('Raio não alterado, limite ultrapassado.');
        else
            this.raio = r;
    }; // Método setter
    circulo.prototype.mover = function (x, y) {
        this.x += x; // this.x = this.x + x;
        this.y += y; // this.y = this.y + y;
    };
    circulo.prototype.aumentar = function (r) {
        this.raio += r;
    };
    circulo.prototype.exibir = function () {
        return "Raio: ".concat(this.raio, ", X: ").concat(this.x, ", Y: ").concat(this.y);
    };
    return circulo;
}());
var circulo1 = new circulo(2, 0, 0);
var circulo2 = new circulo(3, 5, 2);
// Objetos criados
console.log(circulo1.exibir());
console.log(circulo2.exibir());
circulo1.aumentar(5);
console.log(circulo1.exibir());
circulo2.mover(2, 4);
console.log(circulo2.exibir());
/* circulo2.raio = 10; -> tá errado isso, ta alterando diretamente o atributo
console.log(circulo2.raio); -> tbm tá errado, n pode ler diretamente
Pra fazer isso de forma correta, tem q usar o Encapsulamento, usando Setter e Getter,
metódos usados para definir (setter) e ler (getter) os atributos.
 */
circulo2.setRaio(-4);
console.log(circulo2.getRaio());
console.log(circulo2.exibir());
