function acariciarAnimal(dog) {
    dog.getColorPelo("cafe");
}
//With "implement" you must use what is inside
var Gato = /** @class */ (function () {
    function Gato() {
    }
    Gato.prototype.maullar = function () {
        return "miau";
    };
    Gato.prototype.getColorPelo = function (pelo) {
        return pelo;
    };
    return Gato;
}());
