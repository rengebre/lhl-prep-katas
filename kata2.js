const conditionalSum = function(values, condition) {
  let sum = 0;
  for (let element of values) {
    if (condition === 'even' && element % 2 === 0) {
      sum += element
    } else if (condition === 'odd' && element % 2 !==0) {
      sum += element
    }
  }
  return sum
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));