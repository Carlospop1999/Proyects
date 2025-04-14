const producto = {
    NombreProducto: "Computadora HP 1TB Gamer",
    Precio: 50000,
    Disponible: true
}

const medidas = {
    Peso: "1.5kg",
    Pulgadas: '20pulgadas'
}

const productoCompleto = {
    ...producto, ...medidas
} //Manera de unir 2 o mas Objetos sin modificar ningun objeto ya que podria traer inconvenietes esa practica

console.log(producto);
console.log(productoCompleto);