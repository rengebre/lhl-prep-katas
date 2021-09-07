const urlEncode = function(text) {
  // Solution without having to loop:
  // return text.trim().split(' ').join('%20');

  // Solution with loop (LHL requested a loop of some kind)
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