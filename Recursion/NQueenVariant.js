const runProgram = (input) => {
  const n = Number(input);
  let chess = new Array(n).fill(new Array(n).fill(0));

  printNQueen(chess, "", 0);
};
var count = 0;
const printNQueen = (chess, str, row) => {
  if (row == chess.length) {
    console.log(str);
    return;
  }
  for (let col = 0; col < chess.length; col++) {
    if (isQueenSafe(chess, row, col)) {
      chess[row][col] = 1;
      printNQueen(chess, str + row + "-" + col + ", ", row + 1);
      chess[row][col] = 0;
    }
  }
};

const isQueenSafe = (chess, row, col) => {
  for (let i = row - 1; i >= 0; i--) {
    if (chess[i][col] == 1) {
      return false;
    }
  }
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (chess[i][j] == 1) {
      return false;
    }
  }
  for (let i = row - 1; i >= 0; i--) {
    for (let j = col; j < chess.length; j++) {
      if (i + j == chess.length) {
        if (chess[i][j] == 1) {
          return false;
        }
      }
    }
  }
  return true;
};

runProgram(`4`);
// const printNQueen=(chess,str,row)=>{
//     if(row==chess.length){
//         console.log(str)
//         return
//     }
//     for(let col =0;col<chess.length;col++){
//         chess[row][col]=1;
//         printNQueen(chess,str+row + '-'+col+ ", ", row+1)
//         chess[row][col]=0
//     }
// }
