// Arrows Functions
const suma2= (num1, num2) => console.log('Suma:',num1+num2);
suma2(5,2);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo('JavaScript');

// -------------------------------------------


// Arrays Methods
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

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

meses.forEach(mes=>{
    if (mes=='Marzo'){
        console.log(`El mes de ${mes} Si existe`);
    }
})

// mes.forEach (function(mes){
//     if(mes=='Marzo'){
//         console.log('El mes de ${mes} Si existe')
//     }
// })

// Some ideal para arreglos de objetos para verificar si existe el objeto "Escritorio" en carrito

resultado = carrito.some(producto=> producto.nombre == 'Escritorio');
// resutaldo = carrito.some(function(producto){
//     return producto.nombre == 'Escritorio'
// })


// Reduce calcula el total de los productos en el carrito 
precios = carrito.reduce((total, producto)=> total + producto.precio , 0);

// Filter util para poder filtrar por cualquier producto o productos
filtrar = carrito.filter((producto)=> producto.precio < 3100);

filtrarN = carrito.filter(producto=> producto.nombre !== 'Escritorio');  

console.log(`El producto se encuentra en el carrito: ${resultado}`);
console.log(`El total del carrito es: ${precios}`);
console.log("Productos Filtrados:",filtrar)
console.log("Producto Filtrado:",filtrarN)