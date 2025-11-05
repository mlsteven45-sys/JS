//5.algoritmo para calcular el factorial de un numero
let numero = 5;
let factorial = 1;
let i = 1;

do {
    factorial *= i;
    i++;
} while(i <= numero);

console.log("El factorial es: " + factorial);