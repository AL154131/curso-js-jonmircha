/*
  18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

  SE PUEDE RESOLVER MAS FACIL CON EXPRESIONES REGULARES
*/

const getVowelsNConsonants = (string) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const consonants = [
    "q",
    "w",
    "r",
    "t",
    "y",
    "p",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];
  string = string.toLowerCase();
  let numVowels = 0;
  let numConsonants = 0;
  for (let i = 0; i < string.length; i++) {
    vowels.forEach((element) => {
      if (element === string[i]) {
        numVowels++;
      }
    });
    consonants.forEach((element) => {
      if (element === string[i]) {
        numConsonants++;
      }
    });
  }
  return console.info(`Vowels: ${numVowels}, Consonants: ${numConsonants}.`);
};

// getVowelsNConsonants("Hola Mundo");

/*
  19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

  LA EXPRESION REGULAR NO SIRVE PARA NOMBRES NO AMERICANOS
*/

const validateName = (name) => {
  let regexName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  return regexName.test(name) ? console.info(true) : console.error(false);
};

// validateName("Jonathan MirCha");

/*
  20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

  EXPRESION REGULAR ALTAMENTE MEJORABLE
*/

const validateEmail = (email) => {
  let regexEmail = /\S+@\S+\.\S+/;
  return regexEmail.test(email) ? console.info(true) : console.error(false);
};

// validateEmail("jonmircha@gmail.com");



