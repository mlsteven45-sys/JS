//4.algoritmo para contar ocurrencias del 'a'en un texto
let texto = "carolina";
let i = 0;
let contador = 0;

do {
    let valor = texto[i].toLowerCase();
    if(valor == "a") {
        contador++;
    }
    i++;
} while(i < texto.length);

console.log('Encontré ' + contador + ' letras vocales a');