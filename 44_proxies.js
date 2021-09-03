// El proxie permite hacer una copia de un objeto literal manteniendo una vinculacion que nos permite determinar un comportamiento esperado al usar el objeto
// El objeto literal
const persona = {
  nombre: "",
  sexo: "",
  edad: 0,
};

// El handler se encarga de hacer las validaciones antes de hacer el set de un propiedad
const manejador = {
  set(objeto, propiedad, valor) {
    // Se verifica si la propiedad que se esta intentando setear existe en la definicion del objeto literal
    if (Object.keys(objeto).indexOf(propiedad) === -1) {
      return console.error(
        `La propiedad: "${propiedad}", no existe en el objeto.`
      );
    }

    if (propiedad === "nombre") {
      let regexName = /^[a-zA-Z]+ [a-zA-Z]+$/;
      if (!regexName.test(valor)) return console.error(
        `La propiedad: "${propiedad}", no es un nombre valido.`
      );
    }
    // Si pasan las validaciones se hace la asignacion
    objeto[propiedad] = valor;
  },
};

// Definiendo un proxy
const p1 = new Proxy(persona, manejador);

p1.nombre = "Ian1 Garay"; // Ejecuta el manejador y manda error por tener un numero
p1.sexo = "H";
p1.edad = 24; // Ejecuta el manejador
p1.instagram = "@danian"; // Ejecuta el manejador y manda el mensaje de error y no realiza la asignacion

// Ambos tienen los mimos valores porque no es un copia normal, esta mantiene un vinculo con el objeto
console.log(p1);
console.log(persona);
