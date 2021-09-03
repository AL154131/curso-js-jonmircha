const a = { };
console.log(a);

const b = new Object();
console.log(b);

const persona1 = {
  nombre: "Ian",
  apellido: "Rodriguez",
  edad: 24,
  pasatiempos: ["Correr", "Musica", "Peliculas", "Leer"],
  soltero: true,
  contacto: {
    email: "iangr@gmail.com",
    tel: "6561615342",
    instagram: "@dan1an"
  },
  saludar: function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} anios`);
  }
};

console.log(persona1);

console.log(persona1['nombre']);
console.log(persona1.nombre);

console.log(persona1.pasatiempos[2]);

console.log(persona1.contacto.instagram);

persona1.saludar();

console.log(Object.keys(persona1));
console.log(Object.values(persona1));

console.log(persona1.hasOwnProperty('nombre'));
console.log(persona1.hasOwnProperty('fecha'));