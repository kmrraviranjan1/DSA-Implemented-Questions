function runProgram(input) {
    // let newInput = input.split(/[\r\n]+/);
    let newInput = input.split("\n").map(function (data) {
      return data.trim().split(" ").map(Number);
    });
    //   console.log(newInput);
    const len = newInput[0];
    const data = newInput[1];
    const res = quickSort(len, data, 0, len - 1);
    console.log(data.join(" "));
  }
  const quickSort = (len, arr, start, end) => {
    
    if (start >= end) {
      return;
    }
    const pivotIndex = partition(len, arr, start, end);
    quickSort(len, arr, start, pivotIndex - 1);
    quickSort(len, arr, pivotIndex + 1, end);
    return arr;
  };
  const partition = (len, arr, start, end) => {
    let pivot = arr[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
      if (arr[i] <= pivot) {
        let temp = arr[i];
        arr[i] = arr[pivotIndex];
        arr[pivotIndex] = temp;
        pivotIndex++;
      }
    }
    let temp = arr[pivotIndex];
    arr[pivotIndex] = arr[end];
    arr[end] = temp;
    return pivotIndex;
  };
  
  if (process.env.USERNAME === "HP") {
    runProgram(`1
    99`);
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
  