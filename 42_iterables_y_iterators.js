const iterable = [10, 12, 13, 14, 15];
// Acceder al iterador de cualquier objeto iterable
const iterador = iterable[Symbol.iterator]();
console.log(iterable);
console.log(iterador);

// Devolver el valor del iterador y si ya termino de iterar por todos los elementos
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

// Forma de hacerlo automatizada
let next = iterador.next();
while (!next.done) {
  console.log(next.value);
  next = iterador.next();
}
