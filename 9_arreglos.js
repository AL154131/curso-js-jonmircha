const a = [];
const b = [10, true, "Ian", ["A","B","C",[1,2,3]]];
console.log(a);
console.log(b);
console.log(b.length);
console.log(b[2]);
console.log(b[0]);
console.log(b[3][2]);
console.log(b[3][3][0]);

const c = Array.of('X','Y','Z');
console.log(c);

const d = Array(100).fill(false);
console.log(d);

const e = new Array(1,2,3,4);
console.log(e);


const blackpink = ["Jisoo", "Jennie", "Rose", "Lisa"];
console.log(blackpink);
blackpink.push("Ian");
console.log(blackpink);
blackpink.pop();
console.log(blackpink);

blackpink.forEach(function(element, index) {
  console.log(`<li id="member${index + 1}">${element}</li>`);
});



