const producto = {
    NombreProducto: "Computadora HP 1TB Gamer",
    Precio: 50000,
    Disponible: true
}

// Forma anterior para extraer una nueva variable desde un objeto 
// const PrecioProducto = producto.Precio;
// const NombreProducto = producto.NombreProducto;
// const DisponibleProducto = producto.Disponible;

// console.log(PrecioProducto);
// console.log(`Nombre del Producto: ${NombreProducto}`);
// console.log(DisponibleProducto);


// Forma mas reciente y fácil de usar

const {Precio, NombreProducto, Disponible} = producto;

console.log(`Precio del Producto: ${Precio}`);
console.log(NombreProducto);
console.log(`Disponibilidad del Producto: ${Disponible}`);