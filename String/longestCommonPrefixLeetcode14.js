const strs = ["dog", "racecar", "car"];
function main(input) {
  let lowestLengthString = input[0].length;
  for (let i = 0; i < input.length; i++) {
    if (input[i].length < lowestLengthString)
      lowestLengthString = input[i].length;
  }
  let commonPrefix = "";
  let close = false;
  for (let i = 0; i < lowestLengthString; i++) {
    const compareString = input[0][i];
    for (let j = 0; j < input.length; j++) {
      if (input[j][i] !== compareString) {
        close = true;
        break;
      }
    }
    if (close) break;
    commonPrefix += compareString;
  }
  return commonPrefix;
}

console.log(main(strs));
