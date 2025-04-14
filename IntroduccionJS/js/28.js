// Clases 

class Producto {
    constructor(nombre, precio, disponible, color, descuento){
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
        this.color = color;
        this.descuento = descuento;
    }

    disponibilidad() {
        return this.disponible ? 'verdadero' : 'falso';
    }

    formatearProducto (){
        return `El Producto ${this.nombre} tiene un precio de: $${this.precio}`;
    }

    precioReal (){
        return `El Producto ${this.nombre} tiene un precio total con descuento de $${this.descuento}: $${this.precio - this.descuento}`
    }

    productoDisponible (){
        return `El Producto ${this.nombre} sigue disponible? ${this.disponible}`
    }
}

const producto1 = new Producto('Laptop', 5000, true, 'Azul, Blanco, Negra', 200);
const producto2 = new Producto('Mouse', 400, false, 'Negro, RBG',50);

console.log(producto1)
console.log(producto2)
console.log(producto1.formatearProducto());
console.log(producto1.precioReal());
console.log(producto1.productoDisponible());
console.log(producto2.formatearProducto());
console.log(producto2.precioReal());
console.log(producto2.productoDisponible());