var hola = "Hola mundo!";
let hello = "Hello world!";
console.log(hola);
console.log(hello);
console.log(window.hola);
console.log(window.hello)

// Esto es un comentario de una linea

/*
Esto
es
un 
comentario
en varias
lineas
*/

console.log("*****CON VAR*****");
var musica = "Rock";
console.log("Variable musica antes del bloque:", musica);

{
  var musica = "Pop";
  console.log("Variable musica dentro del bloque:", musica);
}

console.log("Variable musica dentro del bloque:", musica);

console.log("*****CON LET*****");
let musica2 = "Rock";
console.log("Variable musica antes del bloque:", musica2);

{
  let musica2 = "Pop";
  console.log("Variable musica dentro del bloque:", musica2);
}

console.log("Variable musica dentro del bloque:", musica2);