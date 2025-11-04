//  Algoritmo para contar ocurrencias de 'a' en un texto

function contarA(texto) {
  let contador = 0;
  let i = 0;

  while (i < texto.length) {
    if (texto[i] === 'a' || texto[i] === 'A') {
      contador++;
    }
    i++;
  }

  console.log("La letra 'a' aparece " + contador + " veces.");
}

contarA("El aguacero cae en el agua cerca de la alberca");