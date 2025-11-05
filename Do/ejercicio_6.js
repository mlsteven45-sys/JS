let numeros = [4, 3, 6, 7, 1, 9, 10, 345, 234, 568, 4, 10, 20];

function darmepares(array) {
    let pares = [];
    let i = 0;
    
    if(array.length > 0) {
        do {
            if(array[i] % 2 === 0) {
                pares.push(array[i]);
            }
            i++;
        } while(i < array.length);
    }
    
    return pares;
}

let arrayNuevo = darmepares(numeros);
console.log(arrayNuevo);