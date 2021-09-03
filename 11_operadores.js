// Operadores

// Aritmeticos: + - * / % ()

let a = 5 + (5 - 10) * 3;
console.log(a);

let modulo = 5 % 2;
console.log(modulo);

// Relacionales
// <, >, <=, >=, ==, ===, !=, !==

console.log(8 > 9);
console.log(8 < 9);

console.log(7 < 7);
console.log(7 <= 7);

// = 1 igual es asignacion de variable
// == 2 igual es comparacion de valores
// === 3 iguales es comporacion de tipo de dato y de valor

// console.log(7 = 7);
console.log(7 == 7);
console.log('7' == 7);
console.log('7' === 7);

console.log(0 == false);
console.log(0 === false);

// Incremento y decremento +=, -= *=, /= ...
let i = 1;
i = i + 2;
i -= 3;
console.log(i);

// Operador unario
i = 5;
i++;
console.log(i);

i = 5;
console.log(i++);
i = 5;
console.log(++i);

// Logicos
// ! Not: Negacion, lo que es verdadero lo vuelve falso y viceversa
// || Or: Cuando tengo 2 o mas condiciones con que un se cumpla, es decir sea verdadera, el OR validara
//  && And: Cuando tengo 2 o mas condiciones todas tienen que cumplirse, es decir, ser verdaderas para que and se cumpla 

console.log(!true);

console.log((7 === 6) || (7 === 7));
console.log((7 === 6) || (7 === 5));

console.log((7 === 6) && (7 === 7));
console.log((7 === 7) || (7 === 7));
