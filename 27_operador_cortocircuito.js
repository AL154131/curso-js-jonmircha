/*
  Cortocircuito OR: Cuando el valor de la izquierda en la expresion siempre pueda validar a true, es el valor que se cargara por defecto.

  Cortocircuito AND: Cuando el valor de la izquierda en la expresion siempre pueda validar a false, es el valor que se cargara por defecto. 
*/

// Cortocircuito OR con valores que Tienden a Verdadero
console.log("Cadena" || "Valor de la derecha");
console.log(13 || "Valor de la derecha");
console.log(' '|| "Valor de la derecha");
console.log([] || "Valor de la derecha");
console.log({} || "Valor de la derecha");
console.log(true || "Valor de la derecha");

// Cortocircuito OR con valores que Tienden a falso
console.log(0 || "Valor de la derecha");
console.log('' || "Valor de la derecha");
console.log(false || "Valor de la derecha");
console.log(null || "Valor de la derecha");
console.log(NaN || "Valor de la derecha");
console.log(undefined || "Valor de la derecha");

// Cortocircuito AND con valores que Tienden a Verdadero
console.log("Cadena" && "Valor de la derecha");
console.log(13 && "Valor de la derecha");
console.log(' '&& "Valor de la derecha");
console.log([] && "Valor de la derecha");
console.log({} && "Valor de la derecha");
console.log(true && "Valor de la derecha");

// Cortocircuito OR con valores que Tienden a falso
console.log(0 && "Valor de la derecha");
console.log('' && "Valor de la derecha");
console.log(false && "Valor de la derecha");
console.log(null && "Valor de la derecha");
console.log(NaN && "Valor de la derecha");
console.log(undefined && "Valor de la derecha");

