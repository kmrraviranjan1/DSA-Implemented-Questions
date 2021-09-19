const runProgram = () => {
   
    const string = 'abc'
    printPerm(string, "");
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
  runProgram()