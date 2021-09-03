function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 1000));
}

// CALLBACK HELL
// El callback puede usarse para controlar que las operaciones asincronas se vayan ejecutando en orden
cuadradoCallback(0, (value, result) => {
  console.log("Inicia Callback");
  console.log(`El cuadrado de ${value} es ${result}`);
  cuadradoCallback(1, (value, result) => {
    console.log("Inicia Callback");
    console.log(`El cuadrado de ${value} es ${result}`);
    cuadradoCallback(2, (value, result) => {
      console.log("Inicia Callback");
      console.log(`El cuadrado de ${value} es ${result}`);
      cuadradoCallback(3, (value, result) => {
        console.log("Inicia Callback");
        console.log(`El cuadrado de ${value} es ${result}`);
        cuadradoCallback(4, (value, result) => {
          console.log("Inicia Callback");
          console.log(`El cuadrado de ${value} es ${result}`);
          cuadradoCallback(5, (value, result) => {
            console.log("Inicia Callback");
            console.log(`El cuadrado de ${value} es ${result}`);
          });
        });
      });
    });
  });
});
