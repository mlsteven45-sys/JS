const texto = "JavaScript es un lenguaje de programacion ampliamente utilizado.";
let contador = 0;
for (let i = 0; i < texto.length; i++) {
    if (texto[i].toLocaleLowerCase() === 'a') {
        contador++;
    }
}
console.log('El texto tiene un total de ' +texto.length+ ' letras.'  );
