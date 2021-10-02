console.log(window);
console.log(document);

// Pequena muestra para hacer hablar el navegador desde la api Web Speech
let texto = "Hola, este es Ian hablando xdxdxdxdxd";
const hablar = (texto) => {
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
};

// hablar(texto);

document.write('<h1>WEB APIs</h1><ul><li>Eventos</li><li>Forms</li><li>AJAX - Fetch</li><li>History</li><li>Web Storage</li><li>Geolocation</li><li>Drag & Drop</li><li>Indexed DB</li><li>Canvas</li><li>MatchMedia</li><li>etc...</li></ul><h2>DOM:Document Object Model</h2><h2>CSSOM: CSS Object Model</h2><h2>BOM: Browser Object Model</h2>');