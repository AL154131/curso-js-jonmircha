export const PI = Math.PI;

export let usuario = "Jon";
let password = "qwerty";
// export default let password = "qwerty"; NO SE PUEDE EXPORTAR POR DEFECTO VAR LET Y CONST

// El default se puede usar en funciones declaradas y clases
export default function saludar() {
  console.log("Hola modulos!");
};