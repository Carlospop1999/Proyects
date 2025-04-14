function cifrar(frase, clave){ 
    let letra, respuesta='';
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    //Rotamos el alfabeto [clave] lugares a la derecha
    let cifrado  = alfabeto.slice(-clave);
    cifrado  += alfabeto.slice(0, alfabeto.length - clave);
    //Coge la letra del cifrado según la posición de cada letra
    //en alfabeto 
    for(let i=0; i< frase.length; i++){  
        letra = frase[i].toLowerCase();
        if(letra ==' '){
            letra =' ';
            }
        else{

            letra = cifrado[alfabeto.indexOf(letra)] ;
            }
        respuesta += letra;
    }
    return  respuesta;
}
function descifrar(frase, clave){ 
    let letra, respuesta='';
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz'
    let cifrado  = alfabeto.slice(-clave);
    cifrado += alfabeto.slice(0, alfabeto.length - clave)
    for(let i=0; i< frase.length; i++) { 
        letra = frase[i].toLowerCase();
        if(letra == ' '){
            letra =' ';
         }
        else{
            letra = alfabeto[cifrado.indexOf(letra)];
            }
        respuesta += letra;
    }
return  respuesta;
}

console.log(cifrar('hola mundo', 2)); // 'krod pxqgr'
console.log(descifrar('elix jrkal', 3)); // 'hola mundo'