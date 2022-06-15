const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let answer = [];
  let nextInc = increment;
  for (let i = 1; i <= 10; i++) {
    const addNumsRes = addNums(nextInc);
    answer.push(addNumsRes);
    nextInc += increment;
  }
  //console.log(answer + " <------ this is console.log");
  return answer;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let answer = [];
  let maxInc = increment * 10;
  for (let i = increment; i <= maxInc; i += increment) {
    const addNumsRes = addManyNums(i);
    answer.push(addNumsRes);
  }
  console.log(answer + " <-- console.log");
  return answer;
}

module.exports = [addNums10, addManyNums10];
