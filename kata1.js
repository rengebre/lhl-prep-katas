const sumLargestNumbers = function(data) {
  // set default minimum values, assuming array is only positive (unkown assumption?)
  let largestNum = 0;
  let secondLargestNum = 0;

  // loop through array, check if element is larger than current largest value, shift largest to second largest then set to current element. also check if element is smaller than largest number, but bigger than second largest.
  for (let element of data) {
    if (element > largestNum) {
      secondLargestNum = largestNum;
      largestNum = element;
    } else if (element > secondLargestNum) {
      secondLargestNum = element;
    }
  }
  return largestNum + secondLargestNum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));