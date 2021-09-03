export function sumar(a, b) {
  return a + b;
}
export function restar(a, b) {
  return a - b;
}

export default class Aritmetica {
  constructor() {
    console.log("Constructor de clase Aritmetica");
  }
  multiplicar(a, b) {
    return a * b;
  }
  dividir(a, b) {
    return a / b;
  }
}
