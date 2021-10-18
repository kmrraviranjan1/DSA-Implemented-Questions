function runProgram(input) {
    // let newInput = input.split(/[\r\n]+/);
    let newInput = input.split("\n").map(function (data) {
      return data.trim().split(" ").map(Number);
    });
  //   console.log(newInput);
    const testCases = newInput[0];
    for (let t = 1; t <= testCases; t++) {
      let len = newInput[t * 2 - 1];
      let data = newInput[t * 2];
      let val = nextGreater(len, data);
      console.log(val.join(' '));
    }
  }
  const nextGreater = (len, data) => {
  //   console.log("data:", data);
    let stack = [];
    let arr = [];
    //  stack[len-1]=-1;
    for (let i = len - 1; i >= 0; i--) {
      if (stack.length <= 0) {
        arr[i] = -1;
      } else {
        while (stack[stack.length - 1] <= data[i]) {
          stack.pop();
        }
        if (stack.length <= 0) {
          arr[i] = -1;
        } else {
          arr[i] = stack[stack.length - 1];
        }
      }
      stack.push(data[i]);
    }
    return arr;
  };
  if (process.env.USERNAME === "HP") {
    runProgram(`1
       4
       1 3 2 4`);
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
  