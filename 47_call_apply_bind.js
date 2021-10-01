this.lugar = "Contexto Global";

function saludar(param1, param2) {
  console.log(`${param1} ${param2} ${this.lugar}`);
}

saludar(); // Contexto Global

const obj = {
  lugar: "Contexto Objeto",
};

// call y apply Me permite cambiar el contexto (this) al ejecutar la funcion 
saludar.call(obj, "Hola Ian", "Desde:"); // Contexto Objeto
saludar.call(null, "Hola Ian", "Desde:"); // Contexto Global
saludar.call(this, "Hola Ian", "Desde:"); // Contexto del lugar donde se ejecute la funcion

saludar.apply(obj, ["Hola Daniel", "Desde:"]); // Contexto Objeto
saludar.apply(null, ["Hola Daniel", "Desde:"]); // Contexto Global
saludar.apply(this, ["Hola Daniel", "Desde:"]); // Contexto del lugar donde se ejecute la funcion

this.nombre = "Window";

const persona = {
  nombre: "Ian",
  saludar: function () {
    console.log(`Soy ${this.nombre}`);
  },
};

persona.saludar();

// Bind permite enlazar un nuevo contexto para una funcion (retorna una copia de la funcion con el contexto cambiado)
const otraPersona = {
  saludar: persona.saludar.bind(persona), // Contexto persona
};

otraPersona.saludar();
