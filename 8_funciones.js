/*
  Una funcion es un bloque de codigo, autocontenido, que se puede ejecutar una vez y ejecutar en cualquier momento.
  Opcionalmente, una funcion puede aceptar parametros y devolver un valor.

  Las funciones en JavaScript son objetos, un tipo especial de objetos:

  Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor, y puede pasarse como argumentos y usarse como un valor de retorno.
*/

// Funcion Declarada
function estoEsUnaFuncion() {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
};

// Invocacion de funcion
estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion();

function funcionQueRetornaValor() {
  console.log("Cuatro");
  return 19;
  console.log("Cinco");
  console.log("Seis");
  return "La funcion ha retornado una cadena de texto"
};

let valorRetornado = funcionQueRetornaValor();
console.log(valorRetornado);

function saludar(nombre = "Desconocido", edad = 0) {
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} anios`)
};

saludar("Ian", 24);
saludar();

// Funciones Declaradas VS Funciones Expresadas

funcionDeclarada();

function funcionDeclarada(){
  console.log("Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada")
}

funcionDeclarada();

// funcionExpresada();

// Funcion anonima
const funcionExpresada = function() {
  console.log("Esto es una funcion expresada, es decir una funcion que se le ha asignado como valor a una variable, si invocamos esta funcion antes de su definicion nos dira: Cannot access 'funcionExpresada' before initialization");
};

funcionExpresada();