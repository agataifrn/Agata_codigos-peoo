var circulo = /** @class */ (function () {
    function circulo(raio, x, y) {
        this.raio = raio;
        this.x = x;
        this.y = y;
    }
    circulo.prototype.exibir = function () {
        return "Raio: ".concat(this.raio, ", X: ").concat(this.x, ", Y: ").concat(this.y);
    };
    return circulo;
}());
var circulo1 = new circulo(2, 0, 0);
var circulo2 = new circulo(3, 5, 2);
console.log(circulo1.exibir());
console.log(circulo2.exibir());
