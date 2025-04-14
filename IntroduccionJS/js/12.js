// "use strict" //Utilizado para seguir buenas practicas.Corriendo JS en modo estricto

const producto = {
    NombreProducto: "Computadora HP 1TB Gamer",
    Precio: 50000,
    Disponible: true
}

// Object.freeze(producto); //--Deniega agregar nuevas propiedades al objeto --Deniega tambien eliminar propiedades
Object.seal(producto); //--Deniega agrega o eliminar propiedades pero si permite modificar propiedades existentes

// producto.Imagen = "image.jpg";

producto.Precio = "Nuevo Precio";

delete producto.Precio;

console.log(producto);

