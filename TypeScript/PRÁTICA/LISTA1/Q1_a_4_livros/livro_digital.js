"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro_Digital = void 0;
var livro_1 = require("./livro");
var Livro_Digital = /** @class */ (function (_super) {
    __extends(Livro_Digital, _super);
    function Livro_Digital(titulo, autor, preco, formato) {
        var _this = _super.call(this, titulo, autor, preco) || this;
        _this.formato = formato;
        return _this;
    }
    Livro_Digital.prototype.descricao = function () {
        return "".concat(_super.prototype.descricao.call(this), " # Formato: ").concat(this.formato);
    };
    return Livro_Digital;
}(livro_1.Livro));
exports.Livro_Digital = Livro_Digital;
