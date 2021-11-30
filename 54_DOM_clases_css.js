// Obtener una clase
const $card = document.querySelector(".card"); // seleccionar la primer tarjeta
console.log($card);
console.log($card.className); // card
console.log($card.classList); // DOMTokenList ['card', value: 'card']

// Verificar que un elemento contenga un clase
console.log($card.classList.contains("rotate-45")); // false

// Agregar una clase a un elemento
$card.classList.add("rotate-45");
console.log($card.className); // card rotate-45
console.log($card.classList.contains("rotate-45")); // true

// Remover una clase
$card.classList.remove("rotate-45");

// Toggle: Si no tiene una clase, se la pone. Si tiene la clase, se la quita.
$card.classList.toggle("rotate-45");

// Reemplazar una clase por otra
$card.classList.replace("rotate-45", "rotate-135");
console.log($card.className); // card rotate-135

// Agregar mas de una clase a la vez
$card.classList.add("opacity-80", "sepia");

// Remover mas de una clase a la vez
$card.classList.remove("opacity-80", "sepia");

// Toggle mas de una clase a la vez
$card.classList.toggle("opacity-80", "sepia");