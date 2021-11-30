// Obtener los atributos de un elemento HTML

// Notacion del punto
console.log(document.documentElement.lang); // es
// Usando getAttribute
console.log(document.documentElement.getAttribute("lang")); // es

// Diferencias entre ambas formas
console.log(document.querySelector(".link-home").href); // http://127.0.0.1:5500/index.html
console.log(document.querySelector(".link-home").getAttribute("href")); // index.html

// Cambiar los atributos de elementos HTML

// Notacion del punto
document.documentElement.lang = "en"; // Cambia el lang a ingles
console.log(document.documentElement.lang); // en

// Usando setAttribute
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang); // es-MX


// Guardando elementos HTML en variables
const $linkHome = document.querySelector(".link-home"); // por convencion se guarda en const y se espieza con el signo $

$linkHome.setAttribute("target", "_black"); // crea un nuevo atributo
$linkHome.setAttribute("rel", "noopener"); // se utiliza por seguridad al usar target: _blank
$linkHome.setAttribute("href", "https://google.com"); // cambia un atributo

console.log($linkHome.hasAttribute("rel")); // true
$linkHome.removeAttribute("rel"); // elimina un atributo
console.log($linkHome.hasAttribute("rel")); // false

// Obtener un map con los data-attributes
console.log($linkHome.dataset); // DOMStringMap {id: '1', description: 'Document Object Model'}

// Obteniedo Data-Attributes
console.log($linkHome.getAttribute("data-id")); // 1
console.log($linkHome.dataset.id); // 1

// Modificar un data-attribute
$linkHome.setAttribute("data-id", "2"); // con la notacion del punto
console.log($linkHome.getAttribute("data-id")); // 2

$linkHome.dataset.id = "3"; // con la notacion del dataset
console.log($linkHome.dataset.id); // 3

console.log($linkHome.hasAttribute("data-id")); // true
$linkHome.removeAttribute("data-id"); // eliminar un data-attribute
console.log($linkHome.hasAttribute("data-id")); // false