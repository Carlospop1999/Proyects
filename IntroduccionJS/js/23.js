// Switch practico para varias condiciones al igual que en varios lenguajes aqui el swtich hace lo mismo
const metodoPago='vale de despensa';

switch(metodoPago){
    case "tarjeta": 
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case "efectivo": 
        console.log(`Pagaste con ${metodoPago}`);
        break;    
    case "cheque": 
        console.log(`Pagaste con ${metodoPago}`);
        break;  
    case "tranferencia": 
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case "vale de despensa": 
        console.log(`Pagaste con ${metodoPago}`);
        break;
        default:
        console.log(`Aún no haz hecho tu pago`)
        break;
}