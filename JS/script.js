function suma (numero1,numero2){
    let adicion = numero1 + numero2;
    resultados.push(adicion);
    console.log ("El resultado es: " + adicion)
}
function resta (numero1,numero2){
    let substraccion = numero1 - numero2;
    resultados.push(substraccion);
    console.log ("El resultado es: " + substraccion)
}
function multiplicacion (numero1,numero2){
    let complemento = numero1 * numero2;
    resultados.push(complemento);
    console.log ("El resultado es: " + complemento)
}
function division(numero1, numero2) {
    if (numero2 === 0) {
        alert("Error: No se puede dividir por 0");
    } else {
        let resto = numero1 / numero2;
        resultados.push(resto);
        console.log("El resultado es: " + resto);
    }
}

let resultados = [];

let num1 = parseFloat(prompt("Ingresar Primer Número"));
let num2 = parseFloat(prompt("Ingresar Segundo Número"));

let opcion = "";

while (opcion !== "7") {

    opcion = prompt("¿Qué cálculo desea realizar?\n1 - Sumar\n2 - Restar\n3 - Multiplicar\n4 - Dividir\n5 - Cargar Nuevos Números\n6 - Ver Resultados\n7 - Salir");
    
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
        case "5":
            num1 = parseFloat(prompt("Ingresar Primer Número"));
            num2 = parseFloat(prompt("Ingresar Segundo Número"));
            console.log("Los nuevos números cargados son: " + num1 + " y " + num2);
            break; 
        case "6":
            if (resultados.length === 0){
                console.log("No se realizaron operaciones");
            } else {
                for(let i = 0; i < resultados.length; i++){
                    console.log ("Los resultados registrados son los siguientes: " + resultados[i]+"\n"); 
                } 
            }                
            break; 
        case "7":
            alert("Programa Finalizado");
            console.log("Gracias por usar Calculator3000");
            break;
        default:
            console.log("Opción no válida. Intente de nuevo.");
            break;       
    }
}