let cadena = "1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore vel quae dolore odit ipsa assumenda id laboriosam ipsam, facilislorem lorem voluptate doloremque explicabo hic ipsum! Beatae quos recusandae tempore magni eaque."

// Formas validas de formar expresiones regulares
let expReg = new RegExp("lorem", "ig");
let expReg2 = /lorem/ig;

// Comprueba que la expresion regular exista en la cadena
console.log(expReg2.test(cadena));
// Arreglo con Informacion sobre la cadena analizada
console.log(expReg2.exec(cadena));

// Expresion regular para encotrar numeros
let expReg3 = /\d/;
let expReg4 = /[0-9]/;
console.log(expReg3.test(cadena));
console.log(expReg4.test(cadena));