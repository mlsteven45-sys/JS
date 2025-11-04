let numeros = [4,3,7,1,9,2,4556,23,67,89];


function devolverMaximo (array){

    let numeroMayor = 0;
    for(let i=0; i<array.lenght; i++){
        if(array[i]>array[i+1]){
            numeroMayor=array[i];
        }

    }
    return numeroMayor;
}
console.log(numeroMayor(numeros));