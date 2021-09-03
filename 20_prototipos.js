const animal1 = {
  nombre: "Perro",
  comunicarse() {
    return "wooff woff!!";
  },
};

const animal2 = {
  nombre: "Gato",
  comunicarse() {
    return "mew mew!!";
  },
};

console.log(animal1.comunicarse());
console.log(animal2.comunicarse());
console.log(animal1);

// Funcion constructora

function Animal(nombre, sonido) {
  // Atributos
  this.nombre = nombre;
  this.sonido = sonido;
  // Metodos
  this.comunicarse = function() {
    return `${this.sonido}!!`
  };
};

const snoopy = new Animal("Perro", "guau guau");
const mimi = new Animal("Gato", "miau miau");
const piolin = new Animal("Pajaro", "pio pio")

console.log(snoopy.comunicarse());
console.log(mimi.comunicarse());
console.log(piolin.comunicarse());
console.log(snoopy);
console.log(mimi);

// Funcion constructura con los metodos agregados al prototipo

function Animal1(nombre, sonido) {
  // Atributos
  this.nombre = nombre;
  this.sonido = sonido;
};

// Metodos
Animal1.prototype.comunicarse = function() {
  return `${this.sonido}!!`;
};

const snoopy1 = new Animal1("Perro", "guau guau");
const mimi1 = new Animal1("Gato", "miau miau");
const piolin1 = new Animal1("Pajaro", "pio pio")

console.log(snoopy1.comunicarse());
console.log(mimi1.comunicarse());
console.log(piolin1.comunicarse());
console.log(snoopy1);
console.log(mimi1);
