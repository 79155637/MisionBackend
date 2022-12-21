// An abstract class is uses as a base for other classes
//Is like the interface, but we can give funcionality
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
var Poligono = /** @class */ (function () {
    function Poligono() {
    }
    return Poligono;
}());
var Rectangulo = /** @class */ (function (_super) {
    __extends(Rectangulo, _super);
    function Rectangulo(ancho, alto) {
        var _this = _super.call(this) || this;
        _this.ancho = ancho;
        _this.alto = alto;
        return _this;
    }
    Rectangulo.prototype.getArea = function () {
        return this.ancho * this.alto;
    };
    return Rectangulo;
}(Poligono));
