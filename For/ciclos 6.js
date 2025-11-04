let numeros = [4,3,7,1,9,2,4556,23,67,89];


function arrayPares(array){
    let arrayPares = [];
    for(let i=0; i<=numeros.length;i++){
        if(numeros[i]%2==0){
            arrayPares.push(numeros[i]);
    }
}
return arrayPares
}

let arrayNuevo =darmepares(numeros);
console.log(arrayNuevo)