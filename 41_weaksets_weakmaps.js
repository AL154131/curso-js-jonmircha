// WEAKSET

// A diferencia de  Sets, WeakSets  son solamente colecciones de objetos y no contienen valores arbitrarios de cualquier otro tipo.
// No tiene propiedad size, ni se puede iterar sobre ellos

// Declarar un WeakSet
// const ws = new WeakSet([1,2,3,4,5,6,true]); No es posible inicilizar con los valores
const ws = new WeakSet();

// Agregar elementos
//ws.add(2); Solo se pueden agregar referencia debiles (objetos)
let valor1 = { value1: 1 };
let valor2 = { value2: 2 };
ws.add(valor1);
ws.add(valor2);
console.log(ws);

// Compobrar si tiene una referencia
console.log(ws.has(valor1));

// Eliminar una referencia
ws.delete(valor1);
console.log(ws.has(valor1));

// Cuando el WeakSet detecta que uno de sus valos se nulifica automaticamente limpia la refencia liberando memoria
// setInterval(() => {
//   console.log(ws);
// }, 1000);

// setTimeout(() => {
//   valor2 = null;
// }, 5000);

// WEAKMAP (MISMOS PRINCIPIOS DE WEAKSET APLICADO A LOS MAPS)
// El objeto WeakMap es una colección de pares clave/valor en la que las claves son objetos y los valores son valores arbitrarios.
const wm = new WeakMap();
let llave1 = {};
let llave2 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);
console.log(wm);

console.log(wm.has(llave1));

wm.delete(llave1);
console.log(wm);

console.log(wm.get(llave2));

// Cuando el WeakSet detecta que uno de sus valos se nulifica automaticamente limpia la refencia liberando memoria
// setInterval(() => {
//   console.log(wm);
// }, 1000);

// setTimeout(() => {
//   llave2 = null;
// }, 5000);
