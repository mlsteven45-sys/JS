//  Escribe una función que reciba un array de números y devuelva un nuevo array que contenga solo los números pares.

function filtrarPares(array) {
let pares = [];
let i = 0;

while (i < array.length) {
  if (array[i] % 2 === 0) {
    pares.push(array[i]);
  }
  i++;

}

  return pares;

}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8]
let resultado = filtrarPares(numeros);

console.log("Numeros pares:", resultado)