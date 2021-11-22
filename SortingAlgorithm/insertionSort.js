function runProgram(input, n) {
  let arr = input;
  for (let i = 1; i < n; i++) {
    let val = arr[i];
    let hole = i;
    while (hole > 0 && arr[hole - 1] > val) {
      arr[hole] = arr[hole - 1];
      hole--;
    }
    arr[hole] = val;
  }
  console.log(arr);
}
const arr = [2, 7, 4, 1, 5, 3];
runProgram(arr, 6);
