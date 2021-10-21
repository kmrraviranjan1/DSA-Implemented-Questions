function runProgram(input) {
    // let newInput = input.split(/[\r\n]+/);
    let newInput = input.split("\n").map(function (data) {
      return data.trim().split(" ").map(Number);
    });
  //   console.log(newInput);
    const len = newInput[0];
    const arr = newInput[1];
    const res = bubbleSort(len, arr);
    console.log(arr.join(' '));
  }
  const bubbleSort = (len, arr) => {
  //   console.log("arr:", arr);
    for (let i = 0; i < len; i++) {
        let flag=true
      for (let j = 0; j < len-i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            flag=false;
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
      if(flag){
          break;
      }
    }
    //   console.log(arr);
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
  