console.log(Math);
// Valores constantes como PI
console.log(Math.PI);
// Valor absoluto
console.log(Math.abs(-7.8));
// Redondear hacia arriba siempre
console.log(Math.ceil(7.2));
// Rodondear hacia abajo siempre
console.log(Math.floor(7.9));
// Rodendear lo justo
console.log(Math.round(7.5));
console.log(Math.round(7.49));
// Raiz cuadrada
console.log(Math.sqrt(81));
// Potencias
console.log(Math.pow(2, 5));
// Indica si el numero el numero es (positivo, negativo o 0)
console.log(Math.sign(-78)); // -1: Negativo, 1: Positivo, 0: Neutro
// Coger numero aleatorio entre 0 y 1
console.log(Math.random());
// Numero aleatorio entre 0 y 100 excluye el 100
console.log(Math.round(Math.random() * 100));
// Formula para obtener Numeros aleatorias entre un rango especifico
let max = 101; // El numero maximo es excluido
let min = 1; // El minimo esta incluido
let r = Math.random() * (max - min) + min;
console.log(Math.floor(r));