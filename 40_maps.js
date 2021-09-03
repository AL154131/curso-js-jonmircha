// Declarando un Map
const map = new Map();

// Asignando valores (key, value)
map.set("nombre", "Ian");
map.set("apellido", "Rodriguez");
map.set("edad", 24);

// Es un tipo de diccionario (conjunto de llaves y valores) o una combinacion de un array con un objeto
console.log(map);

// Mostrar tamanio
console.log(map.size);

// Comprobar si tiene
console.log(map.has("nombre"));

// Obtener un valor
console.log(map.get("nombre"));

// Sobreescribir un valor
map.set("nombre", "Daniel");
console.log(map.get("nombre"));

// Eliminar elementos de un Map
map.delete("apellido");
console.log(map);

// Un map a diferencia de un objeto puede tener cualquier tipo de dato como Key, los objetos solo puede tener strings o symbols
map.set(19, "diecinueve");
map.set(false, "nocheto");
map.set({}, {});

// Iterar sobre un mapa con destructuracion en el for of
for (let [key, value] of map) {
  console.log(`Key: ${key}, Value: ${value}`);
}

// Otra forma de inicializar un Map directamente
const map2 = new Map([
  ["nombre", "Tere"],
  ["apellido", "Acosta"],
  [null, "nuloporelculo"],
]);
console.log(map2);

// Extraer en un arreglo las llaves y valores
const keysMap = [...map.keys()];
const valuesMap = [...map.values()];
console.log(keysMap);
console.log(valuesMap);