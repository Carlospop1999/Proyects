const carrito = [
    { nombre: "Computadora 35 Pulgadas", precio: 4500},
    { nombre: "Monitor 25 Pulgadas", precio: 4000},
    { nombre: "Audifonos Beat", precio: 4100},
    { nombre: "Consola Xbox SeriesX", precio: 9500},
    { nombre: "Mouse RGB", precio: 1500},
    { nombre: "Escritorio", precio: 3000},
    { nombre: "Silla Gamer", precio: 2800},
    { nombre: "Disco Duro", precio: 2000},
    { nombre: "Control PlayStation5", precio: 1450},
    { nombre: "iPhone 20ProMax", precio: 20500}
];

// ForEach ----Interar sobre arreglo y mostrar los arreglos en consola para mostarlos en html 
carrito.forEach(producto => console.log(producto.nombre));
const arreglo1 = carrito.forEach(producto => producto.nombre); //No funciona para agregar un nuevo arreglo (X.forEachX)

// map -----Crear un nuevo arreglo  por ejemplo el de abajo
// carrito.map(producto => console.log(producto.nombre)); 
const arreglo2 = carrito.map(producto => producto.nombre); //Sirve para poder crear un nuevo arreglo (.map) para filtrar 
                                                           //nombre, precio o cualquier otro datos 
const arreglo3 = carrito.map (producto => `${producto.nombre} - ${producto.precio}`)
console.log(arreglo1)
console.log(arreglo2)
console.log(arreglo3)
