const generateBoard = function(queenW, queenB) {
  let boardArray = [];
  for (let i = 0; i < 8; i++) {
    boardArray.push([]);
  }
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i === queenW[0] && j === queenW[1]) || (i === queenB[0] && j === queenB[1])) {
        boardArray[i].push(1);
      } else {
        boardArray[i].push(0);
      }
    }
  }
  return boardArray;
}

const queenThreat = function(board) {
  // Find the the coordinates of each node (value of 1) and push them into row/column arrays
  let nodeRow = [];
  let nodeCol = [];
  for (let i = 0; i < generatedBoard.length; i++) {
    let rowSum = generatedBoard[i].reduce(function (total, current, index) { 
      if (current > 0) {nodeCol.push(index);} 
      return total + current;}, 0);
    
    // check if there is a node in this row. If there are 2 nodes return a true
    if (rowSum === 1) {
      nodeRow.push(i);
    } else if (rowSum > 1) {
      return true;
    }
  }
  
  // create a difference array between the two coordinates to compare absolute values
  let diffArray = [];
  diffArray.push(Math.abs(nodeRow[0] - nodeRow[1]));
  diffArray.push(Math.abs(nodeCol[0] - nodeCol[1]));

  // if the column/row indeces of the diffArray are equal, the queens are diagonally joined. If either index is 0, they are either horizontally or vertically joined.
  if (diffArray[0] === diffArray[1]) {
    return true;
  } else if (diffArray[0] === 0 || diffArray[1] === 0) {
    return true;
  } else {
    return false;
  }
}

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));