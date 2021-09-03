// Limpiar la consola
console.clear();

// Errores, Alertas y Mensajes
console.error("Esto es un error");
console.warn("Esto es un aviso")
console.info("Esto es un mensaje informativo");
console.log("Esto es un registro de lo que ha pasado en nuestra aplicacion");

let nombre = "Ian",
  apellido = "Garay",
  edad = 24;

// Formas de imprimir variables por consola
console.log("Hola, mi nombre es", nombre, apellido, "y tengo", edad, "anios de edad."); // Concatenacion
console.log(`Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} anios de edad.`); // Interpolacion
console.log("Hola, mi nombre es %s %s y tengo %d anios de edad", nombre, apellido, edad); // Comodines

// Mostrar el Objeto Ventana (del navegador) y el Documento HTML
console.log(window);
console.log(document);
console.dir(document);

// Crear grupos
console.group("Grupo en la consola");
console.log("Elemento 1");
console.log("Elemento 2");
console.log("Elemento 3");
console.log("Elemento 4");
console.log("Elemento 5");
console.groupEnd;

// Crear tablas
console.table(Object.entries(console).sort());

const numeros = [1, 2, 3, 4, 5];
const vocales = ['a', 'e', 'i', 'o', 'u'];

const gato = {
  nombre: "Romina",
  color: "Cafe",
  edad: "9 meses"
}

console.table(numeros);
console.table(vocales);
console.table(gato);

// Registrar tiempos de ejecucion
console.time("cronometroArreglo");

const arreglo = Array(1000000);

for(let i = 0; i < arreglo.length; i++) {
  arreglo[i] = i;
}

console.timeEnd("cronometroArreglo");

// Contabilizar las ejecuciones de un codigo

for(let i = 0; i < 100; i++) {
  console.count("codigo for");
}

// Realizar pruebas con assert
let a = 5;
let b = 6;
let pruebaXY = "Se espera que B siempre sea menor que A";

console.assert(b < a, {a, b, pruebaXY});