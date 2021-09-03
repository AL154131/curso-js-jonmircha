import { esNumero } from "./32_ejercicios_1.js";
import { esPalindromo } from "./32_ejercicios_2.js";

/*
  9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/

const randomizeByRange = (min, max) =>
  esNumero(min) && esNumero(max) && min <= max
    ? Math.floor(Math.random() * (max + 1 - min) + min)
    : "Favor de ingresar el rango en valor numerico en el orden: Valor Minimo, Valor Maximo";

// console.log(randomizeByRange(1, 100));

/*
  10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
*/

const isCapicua = (num) =>
  esNumero(num) ? esPalindromo(num.toString()) : "Favor de ingresar un numero";

// console.log(isCapicua(2002));

/*
  11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/

const calculateFactorial = (num) => {
  if (!esNumero(num)) return "Favor de ingresar un numero";
  num = Math.floor(Math.abs(num));
  let factorial = 1;
  for (let i = num; i > 0; i--) factorial *= i;
  return factorial;
};

// console.log(calculateFactorial(5));
