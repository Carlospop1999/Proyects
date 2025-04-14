// Declaraciones de Funciones

function suma(){
    console.log('Suma 1:',20+30);
}
suma();

// Expresiones de Funciones

const suma2= function (){
    console.log('Suma 2:',5+5);
}
suma2();

// IIFE funcion que se manda llamar a ella misma -Utilis para no poder mezclas funciones con variables de otros archivos

(function(){
    console.log('SOY una funcion IIFE')
})();


// ---------------------------------------------
// hoisting Pasos 1. Registro o creacion de funciones 2. Ejecucion mandar a llamar
// EL hoisting hace el chequeo 2 veces de las funciones buscando primero la funcion y luego que se mande a llamar
// sin importar el orden que esta organizado.

// Declaraciones de Funciones
suma3();
function suma3(){
    console.log('Suma 3:',20+30);
}


// Expresiones de Funciones

const suma4= function (){
    console.log('Suma 4:',5+5);
}
suma4();


// *********
const num1= 20;
const num2= 30;

function suma5(num1, num2){
    return num1+num2;
    // console.log(`La suma es: ${num1+num2}`); //Se puede llamar a la funcion y pasarle los valores de las variables               
}

resultado= suma5(num1,num2)+3;
console.log(resultado) //Se puede llamar a la funcion y pasarle los valores directamente