console.log(this); // Hace referencia al objeto Window
console.log(this === window); // true

this.nombre = "Contexto global";
console.log(this.nombre); // Contexto global

// La funciones crean su propio contexto pero al no tener una propiedad nombre se saltan al contexto global
function imprimir() {
  console.log(this.nombre);
}

imprimir(); // Contexto global

// Objeto con funcion declarada
const obj = {
  nombre: "Contexto Objeto",
  imprimir() {
    console.log(this.nombre);
  },
};

obj.imprimir(); // Contexto Objeto

// Utilizando una funcion global
const obj2 = {
  nombre: "Contexto Objeto 2",
  imprimir,
};

obj2.imprimir(); // Contexto Objeto 2

// Objeto con funcion anonima
const obj3 = {
  nombre: "Contexto Objeto 3",
  imprimir: function () {
    console.log(this.nombre);
  },
};

obj3.imprimir(); // Contexto Objeto 3

// Objeto con funcion flecha
const obj4 = {
  nombre: "Contexto Objeto 4",
  imprimir: () => {
    // La arrow function obedece al contexto del padre donde fue creado el objeto
    console.log(this.nombre);
  },
};

obj4.imprimir(); // Contexto global

// Funcion constructora
function Persona(nombre) {
  this.nombre = nombre;
  return console.log(this.nombre);
}

let p1 = new Persona("Ian"); // Ian

// Funcion constructora retornando un funcion anonima
function Persona2(nombre) {
  this.nombre = nombre;
  return function () {
    console.log(this.nombre);
  };
}

let p2 = new Persona2("Daniel");
p2(); // Contexto global porque la funcion anonima crea su propio contexto donde no existe la propiedad nombre y por lo tanto se salta al contexto global

// Funcion constructora retornando una funcion flecha
function Persona3(nombre) {
  this.nombre = nombre;
  return () => {
    console.log(this.nombre);
  }
}

let p3 = new Persona3("Maria");
p3(); // Maria porque la arrow function no crea un contexto

// Funcion constructora retornando un funcion anonima con el contexto de la funcion constructora guardado en una variable (Se solia hacer antes para resolver este problema)
function Persona4(nombre) {
  const that = this;
  that.nombre = nombre;
  return function () {
    console.log(that.nombre);
  };
}

let p4 = new Persona4("Teresa");
p4(); // Contexto global porque la funcion anonima crea su propio contexto donde no existe la propiedad nombre y por lo tanto se salta al contexto global