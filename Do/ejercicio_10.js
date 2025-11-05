//10.Desarrolla una función que genere el total de las tablas de multiplicar dado un numero entero.
const generarTabla = N => { 
    let i = 0;
    (i <= 9) 
       do{ 
        console.log(`${N} x ${i} = ${N * i}`);
            i++;
    } while  (i <= 9);
    
}
generarTabla(8);