import { esCadena } from "./32_ejercicios_1.js";

/*
  5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

const invertirCadena = (cadena) =>
  esCadena(cadena)
    ? cadena.split("").reverse().join("")
    : "Favor de Ingresar una cadena de texto";

// console.log(invertirCadena("Hola Mundo"));

/*
  6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/

const contarPalabras = (cadena, palabra) => {
  if (
    esCadena(cadena) &&
    esCadena(palabra) &&
    palabra !== "" &&
    palabra !== "." &&
    palabra !== " "
  )
    try {
      return cadena.match(RegExp("\\b" + palabra + "\\b", "ig")).length;
    } catch {
      return 0;
    }
  else {
    return "Favor de Ingresar una cadena de texto";
  }
};

// console.log(contarPalabras("hola mundo adios mundo", "mundo"));

/*
  7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/

export const esPalindromo = (cadena) => {
  if (esCadena(cadena)) {
    cadena = cadena.toLowerCase().replace(/\s/g, "");
    for (let i = 0; i < cadena.length; i++) {
      if (!(cadena[i] === cadena[cadena.length - 1 - i])) {
        return false;
      }
    }
    return true;
  } else {
    return "Favor de Ingresar una cadena de texto";
  }
};

// console.log(esPalindromo("Salas"));

/*
  8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. 
*/

const eliminarPatron = (cadena, patron) =>
  !(esCadena(cadena) && esCadena(patron))
    ? "Favor de ingresar una cadena de texto y un patron de texto"
    : cadena.replace(RegExp(patron, "ig"), "").trim();

// console.log(eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));
