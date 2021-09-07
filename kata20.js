const directionNavigation = {
  nr: 'east',
  nl: 'west',
  er: 'south',
  el: 'north',
  sr: 'west',
  sl: 'east',
  wr: 'north',
  wl: 'south'
}

const directionMultiplyer = {
  north: 1,
  east: 1,
  south: -1,
  west: -1
}

const blocksAway = function(directions) {
  let currentLocation = [0, 0];
  let currentDirection = 'north';
  let returnObject = {};

  for (let i = 0; i < directions.length; i += 2) {
    if (i === 0 && directions[i] === 'left') {
      currentDirection = 'east';
    }

    currentDirection = directionNavigation[currentDirection[0] + directions[i][0]];
    if (currentDirection === 'east' || currentDirection === 'west') {
      currentLocation[0] += directions[i + 1] * directionMultiplyer[currentDirection];
    } else if (currentDirection === 'north' || currentDirection === 'south') {
      currentLocation[1] += directions[i + 1] * directionMultiplyer[currentDirection];
    }
  }
  returnObject['east'] = currentLocation[0];
  returnObject['north'] = currentLocation[1];

  return returnObject;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));