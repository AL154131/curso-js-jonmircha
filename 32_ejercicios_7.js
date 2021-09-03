export const validateNumericArray = (array) => {
  // Validate parameter is an array
  if (!Array.isArray(array))
    return console.error(`Error: The parameter: ${array} is not an array.`);
  // Validate array is not empty
  if (array.length === 0) return console.error("Error: The array is empty.");
  // Validate all elements of array are numbers
  for (const element of array) {
    if (!(typeof element === "number"))
      return console.error(`Error: The element: ${element} is not a number.`);
  }
  return true;
};

/*
  21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

  SE PUEDE USAR EL METODO MAP DE LOS ARREGLOS PARA CREAR EL NUEVO ARREGLO MAS FACIl
*/

const squaringArray = (array) => {
  // Validate array
  if (!validateNumericArray(array)) return false;
  // Create the new array
  const newArray = [];
  // Iterate over the array elements and square them
  array.forEach((element) => {
    newArray.push(element * element);
  });
  // Return the new array with the square values
  return console.info(newArray);
};

// squaringArray();
// squaringArray([]);
// squaringArray(["1", 2, "3"]);
// squaringArray([1, 4, 5]);

/*
  22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

  SE PUEDE UTILIZAR LOS METODOS MIN Y MAX DEL OBJETO MATH.
*/

const returnHigherNLower = (array) => {
  // Validate array
  if (!validateNumericArray(array)) return false;
  // Start variables as first element of array
  let higher = array[0];
  let lower = array[0];
  // Iterate over array and compare every element to find the higher and lower values
  array.forEach((element) => {
    if (element > higher) higher = element;
    if (element < lower) lower = element;
  });
  // Return higher and lower elements
  return console.info([higher, lower]);
};

// returnHigherNLower();
// returnHigherNLower([]);
// returnHigherNLower(['2', 2, 'Hola']);
// returnHigherNLower([1, 4, 5, 99, -60]);

/*
  23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

  ESTO SE PUEDE RESOLVER DE UN FORMA MAS DECLARATIVA/FUNCIONAL UTILIZANDO EL METODO FILTER DE LOS ARRAY
  TAMBIEN SE PUEDE CREAR EL OBJETO DIRECTAMENTE EN EL RETURN Y LLENAR LOS ARREGLAS DENTRO DEL OBJETO CON FILTER
  {
    odds: array.filter(num => num % 2 === 1)
    evens: array.filter(num => num % 2 === 0)
  }
*/

const separateOddNEven = (array) => {
  if (!validateNumericArray(array)) return false;
  const odds = [];
  const evens = [];
  const oddAndEven = {
    odds,
    evens,
  };
  array.forEach(element => {
    if (element % 2 === 0) oddAndEven.evens.push(element);
    if (Math.abs(element % 2) === 1) oddAndEven.odds.push(element);
  });
  return console.info(oddAndEven);
};

// separateOddNEven();
// separateOddNEven([]);
// separateOddNEven(['2', 3, 'hola']);
// separateOddNEven([1,2,3,4,5,6,7,8,9,0]);
