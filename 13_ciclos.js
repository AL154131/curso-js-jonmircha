// While
let contador = 0;
while(contador <= 5) {
  console.log("while:", contador);
  contador++;
};

// Do - While
contador = 0;
do {
  console.log("do while:", contador);
  contador++;
} while (contador <= 5);

// For
for(let i = 0; i <= 5; i++) {
  console.log("for:", i);
};

const blackpink = ["Jisoo", "Jennie", "Rose", "Lisa"];

for(let i = 0; i < blackpink.length; i++) {
  console.log("for:", blackpink[i]);
};

// For In
const persona = {
  nombre: "Ian",
  apellido: "Rodriguez",
  edad: 24
};

for (key in persona) {
  console.log("Llave:", key, "| Valor:", persona[key]);
};

// For Of
for(let element of blackpink) {
  console.log("for of:", element);
};

let cadena = "Playing with fire";
for(let caracter of cadena) {
  console.log(caracter);
};






