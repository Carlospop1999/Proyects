// Arrays o Arreglos 

const numeros = [
    10, 20, 30, 40, 50, 60
]

console.table(numeros);

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
console.table(meses);

const arreglos = ["Hola", 24, false, null, {nombre: "Carlos", apellido: "Carlos"}, [1,2,3,4]];
console.table(arreglos);

// Acceder a valores de arreglo a traves del indice
console.log(`La posición 4 en el índice tiene el valor: ${numeros[4]}`);
console.log(numeros[3]);

// Conocer la extensión de los arreglos 
console.log(`El total de meses en el arreglos son: ${meses.length}`);
console.log(numeros.length);

// Forma sencilla de colocar todos los datos del array 
numeros.forEach(function(numeros){
    console.log(`Número: ${numeros}`)
});

// ********
numeros.forEach((numeros) => {
    console.log(`Número con Arrow Function: ${numeros}`)
});
// Arrow funticon sintaxis mas corta 
