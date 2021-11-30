const $linkHome = document.querySelector(".link-home");

// Devuelve un map con todas las propiedades css validad del elemento (solo las que han sido modificadas en el atributo style de html)
console.log($linkHome.style); // CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}

// Devuelve un map con todas las propiedades css validad del elemento (todas las propiedades css computadas por el navegador)
console.log(getComputedStyle($linkHome)); // CSSStyleDeclaration {0: 'accent-color', 1: 'align-content', 2: 'align-items', 3: 'align-self'', …}

// Accerder al valor de una propiedad css
console.log($linkHome.style.color); // vacio (no he modificado ese valor desde js o html)
console.log(getComputedStyle($linkHome).getPropertyValue("color")); // rgb(218, 0, 55)

// Establecer valores
$linkHome.style.setProperty("text-decoration", "none"); // usando setProperty
$linkHome.style.display = "block"; // usando la notacion del punto
$linkHome.style.textAlign = "center"; // se usa la forma de escribir lowerCamelCase en las propiedades

// Lo valores modificados desde js se establecen en la equite style del html
console.log($linkHome.style.display); // block
console.log($linkHome.getAttribute("style")); // text-decoration: none; display: block; text-align: center;


// Variables CSS (Custom Properties CSS)
// Acceder a las variables
const $html = document.documentElement; // guardar etiqueta html
const $body = document.body; // guardar el elemento body

// Guardar los valores de las variables css
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor); //  #222  #F7DF1E

// Asinar las variables css
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

// Modificar las variables css
$html.style.setProperty("--dark-color", "#000");

// Es necesario actulizar para ver los cambios
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.backgroundColor = varDarkColor;

