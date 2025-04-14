function suma (num1, num2) {
        return num1+num2;
}
    const res = suma(5, 3);
    console.log(`Resultado: ${res}`);

// ---------------------------------------

let total = 0;

function agregarCarrito (producto){
    return total += producto;
}

function calculaImpuesto(total){
    return total * 1.15;
}
    total = agregarCarrito(200);
    total = agregarCarrito(300);
    total = agregarCarrito(500);

    console.log(`El total del carrito es: $${total}`)

const totalPagar = calculaImpuesto(total);
    console.log(`Total a pagar mas impuestos del 1.15%: $${totalPagar}`)