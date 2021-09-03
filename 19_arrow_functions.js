// Funcion Declarada

decirHola();

function decirHola() {
  console.log("Hola mundo!!");
}

// Funcion Expresada

//sayHi(); No se puede usar antes de inicalizar la funcion expresada

const sayHi = function () {
  console.log("Hello World!!");
};

sayHi();

// Arrow Function

const saludar = () => {
  console.log("Buenos dias.");
  console.log("Segunda instruccion");
};
saludar();

// Arrow Function con una sola instruccion

const saludar1 = () => console.log("Buenos tardes.");

saludar1();

// Arrow Function con parametros

const saludar2 = (nombre, apellido) =>
  console.log(`Buenas noches, ${nombre} ${apellido}`);

saludar2("Ian", "Garay");

// Arrow Function con 1 solo parametro

const saludar3 = (nombre) => console.log(`Hola, ${nombre}, como estas?`);

saludar3("Ian Garay");

// Return en una Funcion Anonima VS Arrow Function con 1 sola instruccion

const sumarAnonima = function (a, b) {
  return a + b;
};

console.log(sumarAnonima(4, 5));

const sumarArrow = (a, b) => a + b;

console.log(sumarArrow(5, 5));

// Arrow Function para recorrer arreglos

const colores = ["Rojo", "Verde", "Azul", "Amarillo"];

colores.forEach(function (element) {
  console.log(element);
});

colores.forEach((element) => console.log(element));

// Arrow functions y el This en objetos

const persona1 = {
  nombre: "Ian",
  edad: 24,
  saludar: function () {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad}`);
    console.log(this);
  },
};

persona1.saludar();

const persona2 = {
  nombre: "Daniel",
  edad: 25,
  saludar: () => {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad}`);
    console.log(this);
  },
};

persona2.saludar();

const persona3 = {
  nombre: "Jose",
  edad: 30,
  saludar() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad}`);
    console.log(this);
  },
};

persona3.saludar();
