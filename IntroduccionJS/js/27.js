// POO /* IMPORTANTE ENTENDER 27.js y 28.js */

/* Object Literal */
const producto = {
    nombre: 'Celular',
    precio: 3000
}
//Object Construct

function Cliente (nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente =function (){
    return `El cliente ${this.nombre} ${this.apellido} compro un producto.`
}

function Producto (nombre, precio, disponible, color,descuento) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
    this.color = color;
    this.descuento = descuento;
}


Producto.prototype.formatearProducto = function (){ // Prototypes    
    return `El Producto ${this.nombre} tiene un precio de: $${this.precio}`; // Permite crear funciones que solo se pueden utilizar en algun objeto especifico
}

Producto.prototype.obtenerPrecioReal = function(){
    return `El Precio con descuento de ${this.nombre} es: $${this.precio - this.descuento}`
}

const cliente1 = new Cliente ('Carlos', 'Sanchez');
const producto1 = new Producto ('Laptop', 5000, true, 'Azul, Blanco, Negra', 200);
const producto2 = new Producto ('Mouse', 400, false, 'Negro, RBG',50);
const producto3 = new Producto ('Almohadilla', 200, true, 'Negro, Blanco, Rojo, Verde',30);
const producto4 = new Producto ('Mando', 1500, true, 'Blanco y Negro',50);
const producto5 = new Producto ('Television 40 Pulgadas', 8000, true, 'Negra',250);
const producto6 = new Producto ('Audifonos', 3500, false, 'Rojo, Azul, Verde, Rosa, Morado',80);
const producto7 = new Producto ('Silla Gamer', 6000, true, 'Negro, Blanco, Amarrillo',200);
const producto8 = new Producto ('Procesador', 12000, false, '' ,500);

console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);
console.log(producto6);
console.log(producto7);
console.log(producto8);
console.log(cliente1);


console.log(producto1.formatearProducto());
console.log(cliente1.formatearCliente());
console.log(producto1.obtenerPrecioReal());