function operacion(dato1, dato2, operador)
{
    let resultado = 0;
    switch (operador)
    {
        case 'suma':
            resultado = dato1 + dato2;
            alert ('Tu resultado es: ' + resultado);
            break;
        case 'resta': 
            resultado = dato1 - dato2;
            alert ('Tu resultado es: ' + resultado);
            break;
        case 'multiplicación':
            resultado = dato1 * dato2;
            alert ('Tu resultado es: ' + resultado);
            break;
        case 'división':
            resultado = dato1 / dato2;
            alert ('Tu resultado es: ' + resultado);
            break;
        default:
            alert ('operación invalida');
    }
}
let dato1 = prompt ('Ingresa tu primer dato');
dato1 = Number (dato1);
let dato2 = prompt ('Ingresa tu segundo dato');
dato2 = Number (dato2)
let operador = prompt ('Elige una de las siguientes operaciones: "suma","resta","multiplicación" o "división"');
operador =String (operador)

operacion (dato1,dato2,operador)