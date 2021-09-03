// Set Time Out
// console.log("Start");
// setTimeout(() => {
//   console.log("This instrucion is executed only once");
// }, 3000);

// Set Interval
// setInterval(() =>{
//   console.log("This instruction runs indefinitely every certain time interval");
// }, 1000);

// Making a clock with "Set Interval"
// setInterval(() => {
//   console.log(new Date().toLocaleTimeString());
// }, 1000);

// Stopping a "Set Time Out" with "Clear Time Out"
let timer = setTimeout(() => {
  console.log("This instrucion is executed only once");
}, 1000);
clearTimeout(timer);
console.log("After stopping setTimeOut");

// Stopping a "Set Interval" with "Clear Interval"
let interval = setInterval(() => {
  console.log("This instrucion is executed only once");
}, 1000);
clearInterval(interval);
console.log("After stopping setInterval");
