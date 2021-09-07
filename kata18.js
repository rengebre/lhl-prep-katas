const squareCode = function(message) {
  let tempMessage = message.split(' ').join('');
  let numOfColumns = Math.ceil(Math.sqrt(tempMessage.length));

  // cycle through characters in the message, add each new character to an element array of tempArray, up to numOfColumns number of elements in tempArray. This groups the columns into separate arrays which can be joined with .join. 
  let tempArray = [];
  for (let i = 0; i < tempMessage.length; i++) {
    for (let j = 0; j < numOfColumns; j++) {
      if (i < numOfColumns) {
        tempArray.push([tempMessage[i]]);
      } else {
        tempArray[j].push(tempMessage[i]);
      }
      if (j < numOfColumns - 1) {
        i++;
      }
    }
  }
  // side note: this process loads some 'undefined' elements into tempArray but join converts these to blank strings anyways, so they can be ignored.
  tempArray.forEach(function (element, index, array) { array[index] = element.join(''); })
  return tempArray.join(' ');
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));