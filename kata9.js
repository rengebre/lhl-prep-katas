const camelCase = function(input) {
  if (input.length === 0) {
    return "ERROR: Invalid input"
  }
  stringArray = input.split(" ");
  for (let i = 1; i < stringArray.length; i++) {
    stringArray[i] = stringArray[i].replace(stringArray[i][0], stringArray[i][0].toUpperCase());
  }
  return stringArray.join('');
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
console.log(camelCase(""));