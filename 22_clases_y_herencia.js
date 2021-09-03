// Clases
class Humano {
  // Es una funcion especial que se ejecuta al instanciar una clase
  constructor(nombre, edad, sexo) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
  }
  // Metodos
  presentarse() {
    console.log(`Hola, mi nombre es ${this.nombre}.`);
  }

  decirEdad() {
    console.log(`Naci hace ${this.edad} primaveras`);
  }
}

h = new Humano("Daniel", 25, "M");
h.presentarse();
h.decirEdad();
console.log(h);

// Herencia con Clases
class Estudiante extends Humano {

  constructor(nombre, edad, sexo, carrera, semestre) {
    // el metodo super ejecuta el constructor del padre
    super(nombre, edad, sexo);
    this.carrera = carrera;
    this.semestre = semestre;
  }

  presentarse() {
    console.log(`Hola, mi nombre es ${this.nombre} y soy un estudiante.`);
  }

  informacionAcademica() {
    console.log(`Estudio ${this.carrera} y voy en ${this.semestre} semestre`);
  }
}

e = new Estudiante("Ian", 30, 'M', "Ing. en Software", 8);
e.presentarse();
e.decirEdad();
e.informacionAcademica();
console.log(e);

