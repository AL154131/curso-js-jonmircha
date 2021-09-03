// Los modulos tienen que ser lo primero en ejecutarse.
import saludar, {PI, usuario as us} from "./31_modulos_constantes.js";
import Ari, {sumar as sum, restar as res} from "./31_modulos_aritmetica.js";

console.log(PI);
console.log(us);
saludar();

console.log(sum(5, 6));
console.log(res(6, 5));
const a = new Ari();
console.log(a.multiplicar(5, 5));
console.log(a.dividir(9, 3));