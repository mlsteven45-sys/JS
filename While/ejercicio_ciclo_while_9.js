//  10. Desarrolla una función que genere el total de las tablas de multiplicar dado un numero entero.
function tablaMultiplicar(numero) {
  let i = 1; // contador inicial
  while (i <= 10) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
    i++; // incrementa el contador
  }
}

// Ejemplo de uso:
tablaMultiplicar(7);