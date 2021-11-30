// Nodos: son colecciones de elementos html
// Forma antigua: devuelve un objeto HTMLCollection
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
// Forma moderna (recibe una selector css valido): devuelve una NodeList
console.log(document.querySelectorAll("li"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll("#menu li"));
// Elementos
console.log(document.getElementById("menu")); // Para los ID este forma sigue siendo mas rapida
console.log(document.querySelector("#menu")); // Solo devuelve el primer elemento que encuentre
// Los nodos tienen simulitudes con los array
console.log(document.querySelectorAll(".card").length);
document.querySelectorAll(".card").forEach((element) => {
  console.log(element);
});
console.log(document.querySelectorAll("li")[2]);
