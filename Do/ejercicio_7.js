// 7.sacar el numero mas grande de la lista//
let numeros = [3, 5, 7, 2, 8, 9, 10, 12, 15, 20];
function numeroGrande(array) {
    let numeroGrande = array[0]; 
    let i = 1;
     do {
        if(array[i] > numeroGrande) {
            numeroGrande = array[i];
        }
        i++;
    } while(i < array.length);
    
    return numeroGrande;
}

console.log(numeroGrande(numeros));