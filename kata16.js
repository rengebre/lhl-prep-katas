const camelCase = function(input) {
  let stringArray = input.split(" ");
  for (let i = 1; i < stringArray.length; i++) {
    stringArray[i] = stringArray[i].replace(stringArray[i][0], stringArray[i][0].toUpperCase());
  }
  return stringArray.join('');
};

const pascalCase = function(input) {
  let stringArray = input.split(" ");
  for (let i = 0; i < stringArray.length; i++) {
    stringArray[i] = stringArray[i].replace(stringArray[i][0], stringArray[i][0].toUpperCase());
  }
  return stringArray.join('');
}

const snakeCase = function(input) {
  return input.split(' ').join('_');
}

const kebabCase = function(input) {
  return input.split(' ').join('-');
}

const titleCase = function(input) {
  let stringArray = input.split(" ");
  for (let i = 0; i < stringArray.length; i++) {
    stringArray[i] = stringArray[i].replace(stringArray[i][0], stringArray[i][0].toUpperCase());
  }
  return stringArray.join(' ');
}

const vowelCase = function(input) {
  let vowelList = "aeiou";
  for (let vowel of vowelList) {
    let re = new RegExp(vowel, 'g');
    input = input.replace(re, vowel.toUpperCase());    
  }
  return input;
}

const consonantCase = function(input) {
  let consonantList = 'bcdfghjklmnpqrstvwxyz';
  for (let consonant of consonantList) {
    let re = new RegExp(consonant, 'g');
    input = input.replace(re, consonant.toUpperCase());
  }
  return input;
}

const upperCase = function(input) {
  return input.toUpperCase();
}

const lowerCase = function (input) {
  return input.toLowerCase();
}

const makeCase = function(input, outputCase) {
  // function to cycle through the priority arrays to determine which case gets acted on first
  const checkPriority = function (oCase, priorityNumArray, returnArray){
    for (let elem of priorityNumArray) {
      for (let i = 0; i < oCase.length; i++) {
        if (oCase[i] === elem) {
          returnArray.push(i);
        }
      }
    }
  }

  //function to check which case function to run
  const checkCase = function (stringInput, stringCase){
    switch (stringCase) {
      case "camel":
        return camelCase(stringInput);
      case "pascal":
        return pascalCase(stringInput);
      case "snake":
        return snakeCase(stringInput);
      case "kebab":
        return kebabCase(stringInput);
      case "title":
        return titleCase(stringInput);
      case "vowel":
        return vowelCase(stringInput);
      case "consonant":
        return consonantCase(stringInput);
      case "upper":
        return upperCase(stringInput);
      case "lower":
        return lowerCase(stringInput);
    }
  }

  // priority arrays
  let priority1 = ['camel', 'pascal', 'snake', 'kebab', 'title'];
  let priority2 = ['vowel', 'consonant'];
  let priority3 = ['upper', 'lower'];
  let priorityArray = [];

  // check if an empty string was passed (might be unecessary)
  if (input.length === 0) {
    return "ERROR: Invalid input"
  }

  // check if there is an array of cases to do, then act on them by priority. Otherwise just use the single case.
  if (typeof outputCase === 'object') {
    checkPriority(outputCase, priority1, priorityArray);
    checkPriority(outputCase, priority2, priorityArray);
    checkPriority(outputCase, priority3, priorityArray);

    for (let priority of priorityArray) {
      input = checkCase(input, outputCase[priority]);
    }
  } else {
    input = checkCase(input, outputCase);
  }
  
  return input;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));