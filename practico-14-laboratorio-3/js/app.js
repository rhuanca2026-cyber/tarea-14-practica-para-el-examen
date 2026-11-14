// comprueba si una edad almacenada en una variable, 
// es mayor de edad, que su valor sea mayor de 18, 
// si es asi imprime el texto eres mayor de edad,
// si no imprime el texto no eres mayor de edad
/* let edad = Number(prompt("ingrese su edad"));
if (edad > 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("No eres mayor de edad");
}
//ejercicio 2
//DADA UNA nota almacenada en una variable, imprime PARA mostrar:
/*mayor o igual a 5,  SUSPENSO,
MAYOR O IGUAL A 5, pero menor a 6, SUFICIENTE,
mayor o igual a 6, BIEN,
MAYor o igual a 7, pero menor a 9, NOTABLE,
mayor o igual a 9, pero menor o igual 10, SOBRESALIENTE
en cualquier otro caso imprime el texto: NOTA NO VALIDA*/
/* let nota = Number(prompt("Ingrese su nota"));
if (nota >= 0 && nota < 5) {
    console.log("SUSPENSO");
} else if (nota >= 5 && nota < 6) {
    console.log("SUFICIENTE");
} else if (nota >= 6 && nota < 7) {
    console.log("BIEN");
} else if (nota >= 7 && nota < 9) {
    console.log("NOTABLE");
} else if (nota >= 9 && nota <= 10) {
    console.log("SOBRESALIENTE");
} else {
    console.log("NOTA NO VALIDA");
}
/*existen dos variables una con un nombre y otra con un apellido. 
primero se hade comprobar el nombre si es igual a daniel, 
se comprueba el apellido si es igual a ramos.
se impreme en pantalla el nombre y el apellido correctos,
en caso de que el nombre sea daniel, pero el apellido no sea ramos,
se imprime en pantalla, apellido incorrecto. en caso de que el nombre no sea daniel,
se imprime en pantalla: usuario desconocido. 
*/
/* let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
if (nombre === "daniel") {
    if (apellido === "ramos") {
        console.log("Nombre y apellido correctos");
    } else {
        console.log("Apellido incorrecto");
    }
} else {
    console.log("Usuario desconocido");
}
/*
dada una lista con diferentes notas,
se debe imprimir la mas baja y la mas alta,
notas igual: [4.5, 9, 3.2, 1.5, 6.4, 7.2] 
*/
let notas = [4.5, 9, 3.2, 1.5, 6.4, 7.2];
let masBaja = notas[0];
let masAlta = notas[0];
for (let i = 1; i < notas; i++) {
    if (notas[i] < masBaja) {
        masBaja = notas[i];
    }
    if (notas[i] > masAlta) {
        masAlta = notas[i];
    }
}
console.log("Nota más baja:", masBaja);
console.log("Nota más alta:", masAlta);
