//String / Cadenas de Texto

const producto = 'Realizando Pruebas para JavaScript con const';
const producto2 = 'Monitor Full';

console.log(`${producto.length} ${producto}`); //Lenght es una propiedad de datos en STRING para saber el tamaño de la cadena de texto en la variable
console.log(producto2);

//IndexOf -busca la palabra a partir de la posicion que se encuentra-
console.log(producto.indexOf('Java'));
console.log(producto2.indexOf('HD'));

//Includes -busca la palabra a partir de la posicion que se encuentra /retorna true o false-
console.log(producto.includes('Java'));
console.log(producto2.includes('HD'));