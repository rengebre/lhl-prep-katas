const multiplicationTable = function(maxValue) {
  let returnString = "";
  for (let i = 1; i <= maxValue; i ++) {
    for (let j = 1; j <= maxValue; j++) {
      if (j === maxValue) {
        returnString += String(i * j) + "\n";
      } else {
        returnString += String(i * j) + " ";
      }
    }
  }
  return returnString;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));