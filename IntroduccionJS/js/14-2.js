// Arrays o Arreglos 

const numeros = [
    10, 20, 30, 40, 50, 60
]

numeros.push(70,80,90,100); //Agrega nuevos datos a arreglos a los ya existentes al final de los arrays
numeros.unshift(-10, -20, -30); //Agrega nuevos datos a arreglos a los ya existentes al principio de los arrays

console.table(numeros);


const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

// meses.pop(); //Elimina el ultimo elemento del arreglo
// meses.shift(); //Elimina el primer elemento del arreglo

// meses.splice(2, 1); //Eliminara a partir de la posicion que se le pide en este ejemplo el 2 que es Marzo, siguiente
//de la cantidad de numeros que se quieren eliminar en este caso solo se eliminara el mes de Marzo 

console.table(meses);

//Rest Operator o Spread Operator --No modifica el arreglo original

const newArreglo = [
    ...meses, 'Junio'
]; //Manera de agregar mas elementos a un Array sin necesidad de manipular internamente o modificar los elementos
console.table(newArreglo);