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
    if (numero2 === 0) {
        alert("Error: No se puede dividir por 0");
    } else if ((numero2 != 0)){
    let resto = numero1 / numero2;
    console.log ("El resultado es: " + resto)
    }
}

let num1 = parseFloat(prompt("Ingresar Primer Número"));
let num2 = parseFloat(prompt("Ingresar Segundo Número"));
let opcion = prompt("Que calculo desea realizar?\n1 - Sumar\n2- Restar\n3- Multiplicar\n4- Dividir\n5- Salir");

while (opcion <= 4){
    
    switch (opcion) {
        case "1":
            suma(num1,num2);
            break;
        case "2":
            resta(num1,num2);
            break;
        case "3":
            multiplicacion(num1,num2);
            break;
        case "4":
            division(num1,num2);
            break;    
        default:
            break;        
    }
    opcion = prompt("Que calculo desea realizar?\n1 - Sumar\n2- Restar\n3- Multiplicar\n4- Dividir\n5- Salir");
}
if (opcion > 4){
    alert ("Programa Finalizado");
    console.log("Gracias por usar Calculator3000");
} 