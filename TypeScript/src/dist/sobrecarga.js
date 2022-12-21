var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rectangulo = /** @class */ (function () {
    //protected meaning is that variable "ancho"and "alto" (in this case) you can use only in this class
    function Rectangulo(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    Rectangulo.prototype.getArea = function () {
        return this.ancho * this.alto;
    };
    Rectangulo.prototype.toString = function () {
        return "Rectangulo con ancho de " + this.ancho + " y alto " + this.alto + " con Area de " + this.getArea();
    };
    return Rectangulo;
}());
var Cuadrado = /** @class */ (function (_super) {
    __extends(Cuadrado, _super);
    function Cuadrado(ancho) {
        return _super.call(this, ancho, ancho) || this;
    }
    Cuadrado.prototype.toString = function () {
        return "Cuadrado con lados de " + this.ancho + " y Area de " + this.getArea();
    };
    return Cuadrado;
}(Rectangulo));
var rectangulo = new Rectangulo(5, 10);
console.log(rectangulo.toString());
var cuadro = new Cuadrado(5);
console.log(cuadro.toString());
