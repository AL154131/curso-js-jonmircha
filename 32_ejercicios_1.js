/*
  1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
  2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
  3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
  4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

/*
  COMENTARIOS:
  - Se podria usar el operador ternario para simplificar los if - else.
  - Usar las validaciones con return al principio usando varios if, sin anidarlos.
  - Algunas expresiones de una linea se puede omitir corchetes en ciclos o condicionales.
*/

export const esCadena = (cadena) => {
  if (typeof cadena === "string") {
    return true;
  } else {
    return false;
  }
};

export const esNumero = (numero) => {
  if (typeof numero === "number") {
    return true;
  } else {
    return false;
  }
};

// ********************************** EJERCICIO 1 ***************************************
const contarCaracteres = (cadena) => {
  if (esCadena(cadena)) {
    return cadena.length;
  } else {
    return "Favor de ingresar una cadena de texto";
  }
};

// console.log(contarCaracteres("Hola Mundo"));

// ********************************** EJERCICIO 2 ***************************************
const recortarTexto = (cadena, numero) => {
  if (esCadena(cadena)) {
    if (esNumero(numero)) {
      numero = Math.abs(numero);
      return cadena.slice(0, numero);
    } else {
      return "Favor de ingresar un numero";
    }
  } else {
    return "Favor de ingresar una cadena de texto";
  }
};

// console.log(recortarTexto("Hola Mundo", 4));

// ********************************** EJERCICIO 3 ***************************************
const separarTexto = (cadena, separador) => {
  if (esCadena(cadena)) {
    return cadena.split(separador);
  } else {
    return "Favor de ingresar una cadena de texto";
  }
};

// console.log(separarTexto("Hola que tal", ' '));

// ********************************** EJERCICIO 4 ***************************************
const repetirTexto = (cadena, repeticiones) => {
  if (esCadena(cadena)) {
    if (esNumero(repeticiones)) {
      repeticiones = Math.abs(repeticiones);
      cadena = cadena += " ";
      return cadena.repeat(repeticiones);
    } else {
      return "Favor de ingresar un numero";
    }
  } else {
    return "Favor de ingresar una cadena de texto";
  }
};

// console.log(repetirTexto("Hola Mundo", 3));
