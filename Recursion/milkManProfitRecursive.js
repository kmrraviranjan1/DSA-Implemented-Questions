function runProgram(input) {
  // let newInput = input.split(/[\r\n]+/);
  let newInput = input.split("\n").map(function (data) {
    return data.trim().split(" ").map(Number);
  });
  //  console.log(newInput)
  const testCases = newInput[0];
  for (let t = 1; t <= testCases; t++) {
    let n = newInput[t];
    let res = noOfWays(n);
    console.log(res);
  }
}
const noOfWays = (n) => {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return 0;
  }

  return noOfWays(n - 4) + noOfWays(n - 8);
};
if (process.env.USERNAME === "HP") {
  runProgram(`1
     12`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
