function suma (numero1,numero2){
    let adicion = numero1 + numero2;
    console.log ("El resultado es: " + adicion)
}
function resta (numero1,numero2){
    let sustraccion = numero1 - numero2;
    console.log ("El resultado es: " + sustraccion)
}
function multiplicacion (numero1,numero2){
    let complemento = numero1 * numero2;
    console.log ("El resultado es: " + complemento)
}
function division (numero1,numero2){
    let resto = numero1 / numero2;
    console.log ("El resultado es: " + resto)
}

let num1 = parseFloat(prompt("Ingresar Primer Número"));
let num2 = parseFloat(prompt("Ingresar Segundo Número"));
let opcion = prompt("Que calculo desea realizar?\n1 - Sumar\n2- Restar\n3- Multiplicar\n4- Dividir\n5- Salir");

switch (opcion) {
    case "1":
        suma(num1,num2);
        break;
    case "2":
        suma(num1,num2);
        break;
    case "3":
        suma(num1,num2);
        break;
    case "4":
        suma(num1,num2);
        break;    
    default:
        if (opcion > 4){
            alert ("Programa Finalizado");
            console.log("Gracias por usar Calculator3000");
        }        
}
