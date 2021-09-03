import { esNumero } from "./32_ejercicios_1.js";

/*
  12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

  SE PUEDE OPTIMIZAR PARA QUE EL CICLO SE DETENGA EN CUANTO ENCUENTRE 1 DIVISOR Y NO TENGA QUE RECORRER TODOS LOS NUMEROS
*/

const esPrimo = (num) => {
  if (!esNumero(num)) return "Favor de ingresar un numero";
  num = Math.floor(Math.abs(num));
  let divisores = 0;
  for (let i = num; i >= 1; i--) {
    if (num % i === 0) divisores++;
  }
  return divisores === 2 ? true : false;
};

// console.log(esPrimo(7));

/*
  13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
*/

const esParOImpar = (num) => {
  if (!esNumero(num)) return "Favor de ingresar un numero";
  num = Math.floor(num);
  return num % 2 === 0 ? "Par" : "Impar";
};

// console.log(esParOImpar(29));

/*
  14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

const convertirGrados = (grados, unidad) => {
  if (!esNumero(grados)) return "Los grados son incorrectos";
  if (unidad === "C") {
    return grados * (9 / 5) + 32 + "°F";
  } else if (unidad === "F") {
    return (grados - 32) * (5 / 9) + "°C";
  } else {
    return "La unidad no es correcta";
  }
};

// console.log(convertirGrados(0, "C"));
