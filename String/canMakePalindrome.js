function runProgram(input) {
  // let newInput = input.split(/[\r\n]+/);
  let newInput = input.split("\n").map(function (data) {
    return data.trim();
  });
//   console.log(newInput);
  const testCases = Number(newInput[0]);
  for (let t = 1; t <= testCases; t++) {
    const len = newInput[t * 2 - 1];
    const data = newInput[t * 2];
    const res = checkPossibilty(len, data);
    console.log("res:", res);
  }
}

const checkPossibilty = (len, data) => {
  // console.log('data:', data)
  let map = {};
  for (let i = 0; i < len; i++) {
    if (data[i] in map) {
      map[data[i]]++;
    } else {
      map[data[i]] = 1;
    }
  }
  let values = Object.values(map);
  // console.log('values:', values)
  let count = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 != 0) {
      count++;
    }
    if (count === 2) {
      return "Not Possible!";
    }
  }
  return "Possible!";
};
if (process.env.USERNAME === "HP") {
  runProgram(`2
     6
     aabbcc
     5
     aabcd`);
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
