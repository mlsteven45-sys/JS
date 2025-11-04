//  Escribe una función que calcule la potencia de un número (base^exponente) utilizando un ciclo for, sin usar el operador de potencia **.
function potencia(base, exponente){
let = resultado = 1;
let i = 0;

while (i < exponente){
  resultado = resultado * base;
  i++;
}

console.log(base + " elevado a " + exponente + " es: " + resultado);

}

potencia(2, 3);
potencia(5, 4);