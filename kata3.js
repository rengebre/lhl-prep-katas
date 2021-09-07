const numberOfVowels = function(data) {
  let vowelCount = 0;
  // string of vowels to check against
  let vowelString = 'aeiou';

  // cycle through data, check is the character is in the string of vowels
  for (let elem of data) {
    for (let char of vowelString) {
      if (elem === char) {
        vowelCount += 1;
        break;
      }
    }
  }
  return vowelCount;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));