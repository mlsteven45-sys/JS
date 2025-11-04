//  Algoritmo para generar la tabla de un numero dado por argumento en una función

function tablaMultiplicar(numero){
let i = 1;

while (i <= 10) {

    console.log(numero + " x " + i + " = " + (numero * i));
    i = i + 1;

}
}

tablaMultiplicar(7);