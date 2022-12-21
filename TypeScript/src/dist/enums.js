//An "enum" is a group of constants
var Coordenadas;
(function (Coordenadas) {
    Coordenadas[Coordenadas["Latitud"] = 59] = "Latitud";
    Coordenadas[Coordenadas["Longitud"] = 60] = "Longitud";
})(Coordenadas || (Coordenadas = {}));
var latitudCor = Coordenadas.Latitud;
console.log(latitudCor);
