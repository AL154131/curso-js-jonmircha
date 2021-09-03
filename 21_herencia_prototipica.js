// Funcion constructura
function Humano(nombre, edad, sexo) {
  this.nombre = nombre;
  this.edad = edad;
  this.sexo = sexo;
}

Humano.prototype.presentarse = function () {
  console.log(`Hola, mi nombre es ${this.nombre}.`);
};

Humano.prototype.decirEdad = function () {
  console.log(`Naci hace ${this.edad} primaveras`);
};

h1 = new Humano("Ian", 24, "M");
h1.presentarse();
h1.decirEdad();
console.log(h1);

// Herencia Prototipica
function Estudiante(nombre, edad, sexo, carrera, semestre) {
  this.super = Humano;
  this.super(nombre, edad, sexo);
  this.carrera = carrera;
  this.semestre = semestre;
}

// Estudiante esta heredando de Humano
Estudiante.prototype = new Humano();
Estudiante.prototype.constructor = Estudiante;

// Sobreescritura de metodos del prototipo padre en el hijo
Estudiante.prototype.presentarse = function () {
  console.log(`Hola, mi nombre es ${this.nombre} y soy un estudiante.`);
};

// Agregar nuevos metodos al hijo
Estudiante.prototype.informacionAcademica = function () {
  console.log(`Estudio ${this.carrera} y voy en ${this.semestre} semestre`);
};

e1 = new Estudiante("Daniel", 19, "M", "Ing. en Software", 8);

e1.presentarse();
e1.decirEdad();
e1.informacionAcademica();
console.log(e1);
