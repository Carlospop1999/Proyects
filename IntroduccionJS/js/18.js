function suma(num1 = 0, num2 = 0){ // num1 y num2 son parámetros dentro de la función

    // con valores predeterminados en los parametros se pude dar un valor por defecto 

    console.log('Suma 1:', num1+num2);
}
suma(5,5); //5,5 son los Argumentos o valores reales a utilizar
suma(10,15);
suma(3, 5);
suma(7,5);
suma(5,9);
suma(5);

const suma2= function (n1, n2){
    console.log('Suma 2:', n1+n2);
}
suma2(20,30);
suma2(20,80);
suma2(10,30);
suma2(4,30);
suma2(2,3);