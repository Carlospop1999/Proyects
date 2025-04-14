// Iteradores
// ---------------------------For loop--------------------------------

for (let i=0; i <=10; i++) {
    console.log(i)
}

for (let i=0; i <= 11; i++){
    if (i % 2 === 0){
        console.log(`El número ${i} es Par`)
    }
    else {
        console.log(`El número ${i} es Inpar`)
    }
}

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

// for (i=0; i < carrito.length; i++) {
//     console.log(carrito[i].nombre);
// } 


// ------------------------------------While loop--------------Revisa primero la condicion que se cumpla para poder ejecutar el codigo-------------

//------ let i=1;

// while (i <= 100){
    
//     if (i%2===0){
//         console.log(`El número ${i} es PAR`);

//     }else {
//         console.log(`El número ${i} es IMPAR`)
//     }
//     i++;
// }

//---- let i = 0;

// while (i < carrito.length){
//     console.log(carrito[i].nombre)

//     i++;
// }

// ---- let i = 20; //indice

// while (i < 10){ //condicion 
        // console.log('Desde while loop')
//     i++; //incremento
// }

// ---------------------------------------Do While loop-----Ejecuta el codigo 1 vez y despues evalua que la condicion se cumpla--------------------------------

let i = 0;

do {
    console.log(i)
    i++
}while (i<=20)
