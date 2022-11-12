const parrafoInicial = document.getElementById("parrafoinicial");

console.log(parrafoInicial);

parrafoInicial.onclick = function() {
  cambiaColorAleatorio();
} 

function cambiaColorAleatorio() {
  const colores = [
    "red",
    "blue",
    "black",
    "cyan"
  ];
  parrafoInicial.style.color = colores[Math.floor(Math.random() * colores.length)];

} 

/*
TIPOS DE DATOS
var -> Modificarse, scope global - NO SE RECOMIENDA - Más COSTOSO en ESPACIO
let -> Modificable, scope limitado - RECOMENDADA USAR
const -> CONSTANTE, NO modificable - Scope GLOBAL pero esta DEFINIDO  desde su creación
/*
CASES
PascalCase - Clases - JAVA

camelCase - variables, funciones, atributos, ->JavaScript
  variable -> parrafoInicial =
  funcion -> parafoInicial()
  atributo -> parafoInicial

snake_case - Python, JavaScript
  variables y funciones

UPPERCASE - Constantes
*/

