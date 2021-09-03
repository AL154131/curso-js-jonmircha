//noExiste;
try {
  noExiste;
  console.log("En el try se agrega el codigo a evaluar");
} catch(error) {
  console.log("catch captura cualquier error surgido o lanzado en el try");
  console.log("El error es:", error);
} finally {
  console.log("El bloque finally se ejecutara siempre al final de un bloque try-catch");
};

console.info("Fuera del primer try catch");

try {
  let num = 'y';
  if(isNaN(num)) {
    throw new Error("El caracter introducido no es numero.");
  } else {
    console.log(num * 10);
  };
} catch(err) {
  console.log("Se ha producido el siguiente error: ", err);
};