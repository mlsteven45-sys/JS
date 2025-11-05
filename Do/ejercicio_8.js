//8.escribe una funcion que calcule la media aritmetica(promedio) de los numeros en un array
let numeros = [3, 5, 7, 2, 8, 9, 10, 12, 15, 20];
function promedio() {
    let acumulador = 0;
    let i = 0;
    
    if(numeros.length > 0) {
        do {
            acumulador += numeros[i];
            i++;
        } while(i < numeros.length);
    }
    
    return acumulador / numeros.length;
}

console.log(promedio());