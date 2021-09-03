// Funcion Anonima Autoejectuable
(function() {
  console.log("Mi primer IIFE");
})();

// Paso de objetos document, window y console para abreviarlos a d, w, c
(function(d, w, c) {
  console.log("Mi segunda IIFE");
  console.log(d);
  console.log(w);
  c.log("Este es un c.log");
  var variableVar = "Soy un Var";
  c.log(variableVar);
})(document, window, console);

// console.log(variableVar); ERROR DE REFERECNIA, VARIABLE VAR NO ESTA DEFINIDA EN ESTE CONTEXTO

// Formas de escribir una IIFE
// Clasica
(function() {
  console.log("Version clasica");
})();

// La Crockford (JavaScript The Good Parts)
((function() {
  console.log("Version Crockford");
})());

// Unaria
+function() {
  console.log("Version Unaria");
}();

// Facebook
!function() {
  console.log("Version facebook");
}();

