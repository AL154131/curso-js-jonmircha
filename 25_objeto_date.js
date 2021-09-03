let fecha = new Date();
console.log(fecha);

// Anio
console.log("Year:", fecha.getFullYear());

// Mes 0 = Enero, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 = Diciembre
console.log("Month:", fecha.getMonth());

// Dia del mes
console.log("Day of the month:", fecha.getDate());

// Dia de la semana D=0, L=1, M=2, X=3, J=4, V=5, D=6
console.log("Day of the week:", fecha.getDay());

// Hora
console.log("Hora:", fecha.getHours());

// Minutos
console.log("Minutos:", fecha.getMinutes());

// Segundos
console.log("Segundos:", fecha.getSeconds());

// Milisegundos
console.log("Milisegundos:", fecha.getMilliseconds());

// Formas "humanas" de mostrar la fecha
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleTimeString());

// Fechas "0" del primer meridiano o de Greenwich
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCHours());
console.log(fecha.toUTCString());

// Timestamp: Cuantos segundos han pasado desde el 1ero de Enero de 1970.
console.log(Date.now());

// Fecha personlizada
const cumple = new Date(1996, 9, 23);
console.log(cumple);

