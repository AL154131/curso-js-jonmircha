let a = 1;
let b = new Number(2);
let c = 7.19;
let d = "5.6";

console.log(typeof c, typeof d)

console.log(a,b,c);

console.log(c.toFixed(1));
console.log(c.toFixed(5));

console.log(parseInt(c));

console.log(a + b);
console.log(c + d);
console.log(c + parseInt(d));
console.log(c + parseFloat(d));
console.log(c + Number.parseInt(d));
console.log(c + Number.parseFloat(d));