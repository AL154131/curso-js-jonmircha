let nombre = "Eevee";
let edad = 4;

// Sin objetos literales
const perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function () {
    console.log("guau guau!");
  },
};

console.log(perro);
perro.ladrar();

// Con objetos literales
const dog = {
  nombre,
  edad,
  ladrar() {
    console.log("woff woff!");
  },
};

console.log(dog);
dog.ladrar();
