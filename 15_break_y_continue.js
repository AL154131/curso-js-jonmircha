// Break
for(let i = 1; i <= 10; i++) {
  if(i % 2 === 0) {
    console.log("break paro en:", i)
    break;
  };
  console.log(i);
};

// Continue
for(let i = 1; i <= 100; i++) {
  if(i % 2 !== 0) {
    //console.log("continue paro en:", i)
    continue;
  };
  console.log(i);
};