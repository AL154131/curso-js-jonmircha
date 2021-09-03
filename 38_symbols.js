// Los Symbol son propiedades privadas con referencias unicas
// Creacion de un Symbol dandole una descripcion
let id = Symbol("id");
let id2 = Symbol("id");

// Los Symbol son identificadores unicos por lo que esta comparacion es falsa
console.log(id === id2);

// Los Symbol son un tipo de datos primitivos
console.log(id, id2);
console.log(typeof id, typeof id2);

// Buena practica para crear un simbol es usando una constante
// El Symbol tiene que existir antes de ser asignado
const NOMBRE = Symbol("nombre del objeto");
const SALUDAR = Symbol("funcion saludar");

// Sintatix para anadir un Symbol a un objeto
const persona = {
  [NOMBRE]: "Ian",
  edad: 35,
};
console.log(persona);

// Si creo una propiedad con el mismo nombre del Symbol no afecta nada
persona.NOMBRE = "Daniel";
console.log(persona);

// Accediendo al valor del Symbol
console.log(persona.NOMBRE); // DANIEL
console.log(persona[NOMBRE]); // IAN

// Una Symbol como una funcion y anadiendose despues de la creacion del objeto
persona[SALUDAR] = function () {
  console.log("Hola");
};
console.log(persona);

// Ejecuntando la funcion en Symbol
persona[SALUDAR]();

// Los Symbol no son accesibles al iterar sobre el objeto
for (const propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]}`);
}

// Conseguir los Symbols de un objeto en un arreglo
console.log(Object.getOwnPropertySymbols(persona));
