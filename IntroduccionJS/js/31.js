// PROMISES --sirve para tener como promesa que se puede ejecutar 

const usuarioAuthenti = new Promise ( (resolve, reject) => {
    const auth = true; // true o false para simular la autenticacion
    
    if (auth){
        resolve ('Usuario Autentificado'); //SE CUMPLE EL RESOLVE
    } else {
        reject ('Usuario Rechazado'); //NO SE CUMPLE EL REJECT
    }

});
usuarioAuthenti 
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

// Existen 3 valores para los promises
// Pending: La petición sigue en espera que se cumpla la validacion 
// Fulfilled: Se cumplio 
// Rejected: Se rechazo o no se puedo completar 