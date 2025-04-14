// Estructuras de control -Codigo condicional
const puntaje = 1005;

if (puntaje ==1000){
    console.log('El puntaje es 1000')
}

else {
    console.log('No es el mismo')
}


const efectivo = 5000;
const carrito = 5000;

if (efectivo >= carrito){
    console.log(`Efectivo total: $${efectivo}.\nTotal de carrito $${carrito}.\n¡Se puede pagar el carrito.!`)
}
else{
    console.log(`Efectivo total: $${efectivo}.\nTotal de carrito $${carrito}.\nSaldo insuficiente :(`)
}


const rol = "Administrador";

if (rol=='Administrador'){
    console.log(`${rol}: Acceso a todo el sistemas`)
}
else if (rol=='Editor'){
    console.log(`${rol}: Puedes tener acceso a algunas funciones limitadas`)
}
else {
    console.log(`${rol}: No tienes acceso`)
}