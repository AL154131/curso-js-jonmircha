// JavaScript Object Notation

const ian = {
  nombre: "Ian",
  edad: 24,
  vivo: true,
  gustos: ["peliculas", "musica", "videojuegos"],
  redes: {
    twitter: "@danian",
    instagram: "@dan1an",
  },
  dinero: null,
};

// console.log(ian);

// Metodo parse de JSON (convierte una notacion JSON valida a codigo de un objeto js)
console.log("{}");
console.log("[]");
console.log("true");
console.log("19");
console.log("null");
console.log("Hola mundo");

console.log(JSON.parse("{}"));
console.log(JSON.parse("[]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("19"));
console.log(JSON.parse("null"));
console.log(JSON.parse('"Hola mundo"'));

console.log(JSON.parse('{"nombre":"Ian","edad":24,"vivo":true,"gustos":["peliculas","musica","videojuegos"],"redes":{"twitter":"@danian","instagram":"@dan1an"},"dinero":null}'));

// Metodo stringify de JSON (convierte una codigo js a una notacion JSON valida)
console.log({});
console.log([]);
console.log(true);
console.log(19);
console.log(null);
console.log("Hola mundo");

console.log(JSON.stringify({}));
console.log(JSON.stringify([]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(19));
console.log(JSON.stringify(null));
console.log(JSON.stringify("Hola mundo"));

console.log(JSON.stringify({x: 10, y: 5}));
console.log(JSON.stringify(ian));