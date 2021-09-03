/*
  JavaScript usa un modelo asincrono y no bloqueante, con un lopp de eventos implementado en un solo hilo (single thread) para operaciones de entrada y salida.
*/

// Codigo Sincrono Bloqueante
(() => {
  console.log("Codigo Sincrono");
  console.log("Inicio");

  function dos() {
    console.log("Dos");
  }

  function uno() {
    console.log("Uno");
    dos();
    console.log("Tres");
  }

  uno();
  console.log("Fin");
})();

console.log("------------------");

// Codigo Asincrono No Bloqueante
(() => {
  console.log("Codigo Asincrono");
  console.log("Inicio");

  function dos() {
    setTimeout(function() {
      console.log("Dos");
    }, 1000);
  }

  function uno() {
    setTimeout(function() {
      console.log("Uno");
    }, 0);
    dos();
    console.log("Tres");
  }

  uno();
  console.log("Fin");
})();
