const numeros = [1, 2, 3];

// Sin destructuracion
let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];
console.log(uno, dos, tres);

// Con destructuracion
const [one, two, three, four] = numeros;
console.log(one, two, three);

const persona = {
  nombre: "Ian",
  apellido: "Garay",
  edad: 24
};

let {nombre, edad, apellido} = persona;
console.log(nombre, apellido, edad);

edad = 10;
console.log(edad*2);

console.log(persona);