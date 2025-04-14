// Async / Await --Lo que hace es cumpliar con codigo o las funciones que tienen
/*La finalidad de las funciones async/await es simplificar el comportamiento del uso síncrono de promesas 
y realizar algún comportamiento específico en un grupo de Promises. Del mismo modo que las Promises son 
semejantes a las devoluciones de llamadas estructuradas, async/await se asemejan a una combinación de 
generadores y promesas.*/

function descargarNewClientes (){
    return new Promise( resolve => {
        console.log('Descargando clientes...')

        setTimeout( () => {
            resolve ('Lo Clientes se descargaron. Exitosamente.')
        }, 6000);
    });
}

function descargarUltimosPedidos (){
    return new Promise( resolve => {
        console.log('Descargando Últimos Pedidos...')

        setTimeout( () => {
            resolve ('Los pedidos se descargaron. Exitosamente.')
        }, 2000);
    });
}

async function app(){
    try {
        const resultado = await Promise.all([descargarNewClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]); //Forma de agilizar varias funciones a la vez para que sea mas rapido el proceso 
                                   //De async - await con varios métodos.
    } catch (error) {
        console.log(error);
    }
}

app();

//************* */

function envioDinero (){
    return new Promise ( resolve => {
        console.log('Transferencia en Proceso....')

        setTimeout ( () => { 
            resolve ('Transferencia Exitosa al número de Tarjeta')
        }, 3000);
    });
}

async function deposito(){
    try {
        const resultado = await envioDinero();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

deposito();