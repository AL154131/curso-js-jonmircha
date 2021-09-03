//  Parametros REST

function sumar(a, b, ...c) {
  let resultado = a + b;

  // console.log(c);

  c.forEach(function(element){
    resultado += element;
  });

  return resultado;
};

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,5,5,5,5,5,5,5,5,5,6,6,6,6,6,9));


// Operador SPREAD
const arreglo1 = [0, 1, 2, 3, 4];
const arreglo2 = [5, 6, 7, 8, 9];

const arreglo3 = [...arreglo1, ...arreglo2];
console.log(arreglo3);
