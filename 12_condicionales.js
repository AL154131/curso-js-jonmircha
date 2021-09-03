// if - else

let edad = 18;
let edadMinima = 18;

if (edad < edadMinima) {
  console.log("Eres menor de edad");
} else {
  console.log("Eres mayor de edad");
}

// if - else if - else
// 6hrs - 11hrs: Buenos dias
// 12hrs - 18hrs: Buenas tardes
// 19hrs - 23hrs: Buenas noches
// 0hrs - 5hrs: Dejame dormir

let hora = 7;

if (hora >= 6 && hora <= 11) {
  console.log("Buenos dias!");
} else if (hora >= 12 && hora <= 18) {
  console.log("Buenos tardes!");
} else if (hora >= 19 && hora <= 23) {
  console.log("Buenas noches");
} else if (hora >= 0 && hora <= 5) {
  console.log("Dejame dormir!");
} else {
  console.log("hora incorrecta");
}

// Operacion Ternario (condicion)? verdadero:falso

let eresMayor = edad < edadMinima ? "Eres menor de edad" : "Eres mayor de edad";
console.log(eresMayor);

// Switch - Case
// Domingo: 0
// Lunes: 1
// Martes: 2
// Miercoles: 3
// Jueves: 4
// Viernes: 4
// Sabado: 6
let dia = 5;

switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;
  default:
    console.log("El dia no existe");
    break;
};
