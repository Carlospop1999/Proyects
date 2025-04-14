// This --- con la sintaxis completa de Function () mas el this hara referencia a las propiedades del objeto
// que se ejecuta sobre la funcion.
const reservacion = {
    nombre: 'Carlos',
    apellido: 'Sanchez',
    total: 5000,
    pagado: false,
    informacion: function () {
        console.log(`El cliente ${this.nombre} hizo una reservación con un total de $${this.total}`);
    }
}

// -----
window.nombre='SOY YO';
const res = {
    nombre: 'YO',
    informacion: ()=> { console.log(`Este es el nombre con la reservación: ${this.nombre}`)}
} //El ejecutar este codigo viene includo un arrow function ()=>{} lo cual puede ser "CORRECTO" mas sin embargo
//esta funcion no funciona, al igual que en otras iteraciones dado que el arrow function da a THIS o la ventana global
//para que funcione y no arroje error debemos colocar 'window.nombre = "NOMBRE"' para que ejecute el nombre correcto
// -----
const reservacion2 = {
    nombre: 'Miguel',
    apellido: 'Ortiz',
    total: 3000,
    pagado: false,
    informacion: function () {
        console.log(`El cliente ${this.nombre} hizo una reservación con un total de $${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();
res.informacion();
