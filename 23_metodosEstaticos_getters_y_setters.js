class Humano {
  
  constructor(nombre, edad, sexo) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
  }
  
  presentarse() {
    console.log(`Hola, mi nombre es ${this.nombre}.`);
  }

  decirEdad() {
    console.log(`Naci hace ${this.edad} primaveras`);
  }
  // Un metodo estatico es aquel que se puede invocar sin nececidad de instanciar la clase
  static queEres() {
    console.log("Soy una especie del orden de los primates perteneciente a la familia de los homínidos.");
  }
  // Los setters y getters son funciones especiales que nos permiten modificar u obtener los valores de los atributos de nuestra clase
  get getNombre() { return this.nombre }
  set setNombre(nombre) { this.nombre = nombre }
}

Humano.queEres();

const h = new Humano("Melissa", 19, 'F');
console.log(h.getNombre);
h.setNombre = "Karen";
console.log(h.getNombre);

h.edad = 10;
console.log(h.edad);
