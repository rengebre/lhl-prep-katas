// object for converting array index to a property name
const indexToPropertyName = {
  "0": "twentyDollar",
  "1": "tenDollar",
  "2": "fiveDollar",
  "3": "twoDollar",
  "4": "oneDollar",
  "5": "quarter",
  "6": "dime",
  "7": "nickel",
  "8": "penny"
}

// function to be executed to return the divisible by and remainder for all denominations
const changeDivider = function (amount, divider, array) {
  array.push(Math.floor(amount / divider));
  let remainder = amount % divider;

  return remainder;
}

// main function
const calculateChange = function(total, cash) {
  let change = cash - total;
  let dividerArray = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  let changeArray = [];
  let returnObject = {};
  
  if (change < 0) {
    return "You don't have enough money";
  } else if (change === 0) {
    return "There is no change, you paid the exact amount";
  }
  
  // loop through each denomination and get the divisible integer and remainder. push divisible integer into an array, update the change left.
  for (let denom of dividerArray) {
    change = changeDivider(change, denom, changeArray);
  }

  // create properties in empty object
  for (let i = 0; i < changeArray.length; i++) {
    if (changeArray[i] !== 0) {
      returnObject[indexToPropertyName[String(i)]] = changeArray[i];
    }
  }
  
  return returnObject;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));