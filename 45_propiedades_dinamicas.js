let aleatorio = Math.round(Math.random() * 100 + 5);

// Poniendo una propiedad dinamica en el objeto con un valor random
const objUsuarios = {
  propiedadEstatica: 1,
  [`propiedadDinamica_${aleatorio}`]: 2,
};
const usuarios = ["ian", "daniel", "tere", "mia", "karen", "ximena"];

console.log(objUsuarios);

// Creando las propiedades del objeto de forma dinamica con el index de un array
usuarios.forEach((usuario, index) => {
  objUsuarios[`id_${index}`] = usuario;
});

console.log(objUsuarios);


