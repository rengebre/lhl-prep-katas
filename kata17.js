const urlDecode = function(text) {
  let returnObject = {};
  let propertyStringArray = text.split('&');

  for (let property of propertyStringArray) {
    let tempArray = property.split('=');
    tempArray.forEach(function (element, index, array) { array[index] = element.split('%20'); });
    returnObject[tempArray[0]] = tempArray[1].join(' ');
  }
  return returnObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);