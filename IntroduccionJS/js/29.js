// HERENCIA EN JS 

class Producto {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto (){
        return `El Producto "${this.nombre}" tiene un precio de: $${this.precio}`;
    }

    obtenerPrecio (){
        console.log(this.precio);
        // return `${this.precio}`;
    }
}
//--

class Libro extends Producto {
    constructor (nombre, precio, isbn){
        super(nombre,precio)
        this.isbn = isbn;
    }
    formatearProducto(){
        return (`${super.formatearProducto()} y su ISBN es ${this.isbn}`)
    }
    obtenerPrecio(){
        super.obtenerPrecio();
        console.log('Hay en existencia');  
    }
}

const libro = new Libro ('Los mejores lenguajes del 2024', 500, 3246745677);
const producto = new Producto('Mouse', 400);

console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());
console.log(producto.formatearProducto());
