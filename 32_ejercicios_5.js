import { esNumero } from "./32_ejercicios_1.js";

/*
  15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

  BASE 2 SE PODIA RESOLVER SOLO CON PARSEINT, SIN USAR EL TOSTRING ANTES
*/

const cambiarBase = (num, base) => {
  if (!(esNumero(num) && esNumero(base)))
    return "Ingresar valores numericos en ambos parametros";
  if (base === 2) {
    num = num.toString();
    num = parseInt(num, 2);
    return num;
  } else if (base === 10) {
    num = num.toString(2);
    return num;
  } else {
    return "Utilizar solo base 10 o base 2";
  }
};

// console.log(cambiarBase(100, 2));

/*
  16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
*/

const calcularMontoFinal = (cantidad, descuento) => {
  if (!(esNumero(cantidad) && esNumero(descuento)))
    return "Ingresar valores numericos en ambos parametros";
  if (!(cantidad > 0 && descuento > 0))
    return "Ingresar valores positivos en ambos parametros";
  return cantidad - (descuento * cantidad) / 100;
};

// console.log(calcularMontoFinal(10000, 50));

/*
  17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

  TENER EN CUANTA QUE LOS MESES EMPIEZAN A CONTAR EN 0, OSEA QUE ENERO = 0 ... DICIEMBRE = 11

  USAR EL OPERADOR INSTANCEOF PARA VERIFICAR QUE SEA UN OBJETO DEL TIPO DATE
*/

const calcularFecha = (fechaElegida) => {
  const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;
  const fechaActual = new Date();
  const utcActual = Date.UTC(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate());
  const utcElegida = Date.UTC(fechaElegida.getFullYear(), fechaElegida.getMonth(), fechaElegida.getDate());
  return Math.floor((utcActual - utcElegida) / MS_PER_YEAR);
};

console.log(calcularFecha(new Date(1984, 4, 23)));
