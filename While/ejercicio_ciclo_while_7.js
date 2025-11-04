//  Implementa una función que calcule la suma de los cuadrados de los primeros N números naturales.

function sumaCuadrados(N){
let suma = 0;
let i = 1;
while (i <= N) {
  suma = suma + i * i;
  i++;
}
console.log("La suma de los cuadrados es:", suma);

}
sumaCuadrados(5);