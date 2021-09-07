const urlEncode = function(text) {
  let returnStr = '';
  let trimmedString = text.trim();
  for (let elem of trimmedString) {
    if (elem === ' ') {
      returnStr += '%20';
    } else {
      returnStr += elem;
    }
  }
  return returnStr;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));