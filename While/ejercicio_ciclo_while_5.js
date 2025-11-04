//  Algoritmo para calcular el factorial de un número

function factorial(numero) {
let resultado = 1;

while (numero > 1) {
  resultado = resultado * numero;
  numero = numero - 1;


}
console.log("El factorial es:", resultado)
}
factorial(5);