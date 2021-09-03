// alert("Esto es una alerta");
// confirm("Esto es una confirmacion");
// prompt("Esto es un aviso");

let alerta = alert("Esto es una alerta");
let confirmacion = confirm("Esto es una confirmacion");
let aviso = prompt("Esto es un prompt");

console.log(alerta); // siempre valdra undefined, no es necesario usar una variable para alert
console.log(confirmacion); // vale true: aceptar, false: cancelar
console.log(aviso); // Contiene lo que el usuario escriba, si cancela se almacenara "null"