// Permite hacer iterable una funcion atraves de multiples returns (yields) que van parando la ejecuccion de la funciones despues de cada yield, esto permite un tipo de comportamiento asincrono.
// Sintaxis para un generador o funcion generadora
function* iterable() {
  yield "yield 1";
  console.log("Instruccion 1");
  yield "yield 2";
  console.log("Instruccion 2");
  yield "yield 3";
  yield "yield 4";
}

// Acceder al iterador de la funcion
let iterador = iterable();

// Ejecucion de los .next()
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

// De forma automatizada
for (let y of iterador) {
  console.log(y);
}

// Guardar en una arreglo los yields
const array = [...iterable()];
console.log(array);

// Ejericio de elevar al cuadrado de forma asincrona
console.log("*** EJERCICIO DEL CUADRADO ***");
function cuadrado(valor) {
  setTimeout(() => {
    console.log({ valor, resultado: valor * valor });
  }, Math.random() * 2000);
}

function* generador() {
  console.log("Inicia generador");
  yield cuadrado(0);
  yield cuadrado(1);
  yield cuadrado(2);
  yield cuadrado(3);
  yield cuadrado(4);
  yield cuadrado(5);
  console.log("Termina generador");
}

let gen = generador();

for (const y of gen) {
  console.log(`yiedl: ${y}`);
}
