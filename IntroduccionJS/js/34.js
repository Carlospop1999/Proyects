// Fetch API Fetch API es una función de JavaScript que puede utilizar para enviar una solicitud a 
// cualquier URL de API web y obtener una respuesta.

async function obtenerEmpleados (){
    const archivo = 'empleados.json';

    // fetch(archivo)
    // .then (resultado => resultado.json())
    // .then (datos => {
    //     // console.log(datos.empleados); //Misma sinstaxis que el destrucction 
    //     const { empleados } = datos;
    //     // console.log(datos);//

    //     empleados.forEach(empleado => {
    //         console.log(`ID: ${empleado.id}`);
    //         console.log(`Nombre del Empleado: ${empleado.nombre}`);
    //         console.log(`Puesto: ${empleado.puesto}`);
    //         console.log(`Edad: ${empleado.edad} años`);
    //     })
    // })
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleados ();