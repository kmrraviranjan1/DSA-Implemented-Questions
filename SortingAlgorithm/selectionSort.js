function runProgram(input) {
    // let newInput = input.split(/[\r\n]+/);
    let newInput = input.split("\n").map(function (data) {
      return data.trim().split(" ").map(Number);
    });
  //   console.log(newInput);
    const len = newInput[0];
    const arr = newInput[1];
    const res = selectionSort(len, arr);
    console.log(arr.join(' '));
  }
  const selectionSort = (len, arr) => {
  //   console.log("arr:", arr);
    for (let i = 0; i < len; i++) {
      let min = i;
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
    return arr;
  };
  if (process.env.USERNAME === "HP") {
    runProgram(`5
       3 5 0 9 8`);
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
  