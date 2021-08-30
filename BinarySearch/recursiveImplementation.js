function runProgram(input) {
  let newInput = input
    .split("\n")
    .map((row) => row.trim().split(" ").map(Number));
  const [n, k] = newInput[0];
  const data = newInput[1];
  const low = 0;
  const high = n - 1;
  data.sort((a, b) => a - b);
  let ans = binarySearch(n, k, data, low, high);
  console.log( ans);
}
const binarySearch = (n, k, data, low, high) => {
  
  let mid = parseInt(low + (high - low) / 2);

  if (low > high) {
    return -1;
  }
  if (data[mid] == k) {
    return 1;
  }
  else if (data[mid] > k) {
    mid--;
   return binarySearch(n, k, data, low, mid);
  } else {
    mid++;
     return binarySearch(n, k,data, mid, high);
  }
};

if (process.env.USERNAME === "HP") {
  runProgram(`5 0
    2 -2 0 3 4`);
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
