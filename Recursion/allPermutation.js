const runProgram = (input) => {
  let newInput = input
    .split("\n")
    .map((row) => row.trim().split(" ").map(Number));
  //
  const len = newInput[0];
  const data = newInput[1];
  printPerm(data, "");
};

const printPerm = (data, ans) => {
  if (data.length == 0) {
    console.log(ans.split("").join(" "));
    return;
  }
  for (let i = 0; i < data.length; i++) {
    let temp = data[i];
    let left = data.slice(0, i);
    let right = data.slice(i + 1);
    let str = left.concat(right);
    printPerm(str, ans + temp);
  }
};

if (process.env.USERNAME === "HP") {
    runProgram(`3
    1 2 3`)
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