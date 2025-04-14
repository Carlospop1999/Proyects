// Objetos

// const NombreProducto = "Computadora HP 1TB Gamer";
// const Precio = 50000;
// const Disponible = true;

const producto = {
    NombreProducto: "Computadora HP 1TB Gamer",
    Precio: 50000,
    Disponible: true
}

console.log(producto);

console.log(`Precio del Producto: ${producto.Precio}`);
console.log(`Nombre del Producto: ${producto.NombreProducto}`);
console.log(`Disponibilidad del Producto: ${producto.Disponible}`);

// Otra sintaxis para mostrar parte de objeto 
console.log(producto["Precio"]); //UNDEFENID

// -----------------------------------------------------

// Agregar nuevos valores o propiedades a objetos
producto.Imagen= "imagen.jpg";

// Eliminar valores o propiedades de objetos
delete producto.Disponible;
console.log(producto);

