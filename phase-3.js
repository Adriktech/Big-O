const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code
  console.time();
  // Your code here
  let answer = [];
  let nextInc = increment;
  for (let i = 1; i <= 10; i++) {
    const startTime = Date.now();
    const addNumsRes = addNums(nextInc);
    answer.push(addNumsRes);
    nextInc += increment;
    const endTime = Date.now();
    console.log(endTime - startTime);
  }
  //console.log(answer + " <------ this is console.log");
  return answer;
}

function addManyNums10Timing(increment) {
  // Copy your `addManyNums10` code here
  // Then, add timing code

  // Your code here
  let answer = [];
  let maxInc = increment * 10;
  for (let i = increment; i <= maxInc; i += increment) {
    const startTime = Date.now();
    const addNumsRes = addManyNums(i);
    answer.push(addNumsRes);
    const endTime = Date.now();
    console.log(endTime - startTime);
  }
  // console.log(answer + " <-- console.log");
  return answer;
}

n = 1000000;
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
