import { validateNumericArray } from "./32_ejercicios_7.js";

const validateArray = (array) => {
  // Validate parameter is an array
  if (!Array.isArray(array))
    return console.error(`Error: The parameter: ${array} is not an array.`);
  // Validate array is not empty
  if (array.length === 0) return console.error("Error: The array is empty.");
  return true;
};

/*
  24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/

const sortArray = (array) => {
  if (!validateNumericArray(array)) return false;
  const asc = [...array].sort((a, b) => a - b);
  const des = [...array].sort((a, b) => b - a);
  const ascNDesc = {
    asc,
    des,
  };
  return console.info(ascNDesc);
};

// sortArray();
// sortArray([]);
// sortArray(['1', 2, '3']);
// sortArray([7, 5, 7, 8, 6]);

/*
  25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

  TAMBIEN SE PUEDE RESOLVER CON UNA COMBINACION DE LOS METODOS FILTER E INDEXOF DE LOS ARREGLOS, PERO ESTA SOLUCION ES MAS OPTIMA.
*/

const deleteRepeated = (array) =>
  validateArray(array) ? console.info([...new Set(array)]) : false;

// deleteRepeated();
// deleteRepeated([]);
// deleteRepeated(["x", 10, "x", 2, "10", 10, true, true]);

/*
  26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

  TAMBIEN SE PUEDE RESOLVER CON EL METODO REDUCE DE LOS ARRAY
*/

const getAvarage = (array) => {
  if (!validateNumericArray(array)) return false;
  let total = 0;
  array.forEach((element) => {
    total += element;
  });
  return console.info(total / array.length); 
};

// getAvarage();
// getAvarage([]);
// getAvarage([1, 2, "Hola", 3]);
// getAvarage([9,8,7,6,5,4,3,2,1,0]);