console.log(window);
console.log(document);

// Pequena muestra para hacer hablar el navegador desde la api Web Speech
let texto = "Hola, este es Ian hablando xdxdxdxdxd";
const hablar = (texto) => {
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
};

hablar(texto);