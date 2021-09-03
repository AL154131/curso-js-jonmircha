// Los Sets son un tipo de dato "similar" a los arreglos pero que solo acepta valores unicos (cuando son primitivos).

// Sintaxis para crear el Set y pasar los valores directamente
const set = new Set([1, 2, 3, 3 , 4, true, false, false, {}, {}, "Hola", "HOLA"]);
console.log(set);

// Conseguir el tamanio de un Set
console.log(set.size);

// Otra forma de mandar valores a un Set
const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(true);
set2.add(false);
set2.add(false);
set2.add({});
console.log(set2);

// Formas de iterar un Set
console.log("*** Con for of ***")
for (const item of set2) {
  console.log(item);
}

console.log("*** Con for each ***")
set2.forEach(element => {
  console.log(element);
});

// Convertir un Set a un arreglo. Esto es necesario para acceder a una posicion del Set (Directamente del Set esto no es posible set[0])
const array = Array.from(set);
console.log(array[0]);

// Eliminar un elemento del Set
set.delete("HOLA");
console.log(set);

// Comprobar si un valor existe en el set
console.log(set.has("Hola"));

// Limpar un Set de todos los valores
set2.clear();
console.log(set2);

