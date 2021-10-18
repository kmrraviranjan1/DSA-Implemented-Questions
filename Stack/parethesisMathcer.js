function runProgram(input) {
    // let newInput = input.split(/[\r\n]+/);
    let str = input.trim();
    //  console.log(newInput)
    let stack = [];
    let flag = true;
    for (let i = 0; i < str.length; i++) {
      //  console.log(str[i])
      if (str[i] === "{" || str[i] === "[" || str[i] === "(") {
        stack.push(str[i]);
      }
      if (str[i] === "}" || str[i] === "]" || str[i] === ")") {
          let x = ''
        switch (str[i]) {
          case "}":
            x = "{";
            break;
          case "]":
            x = "[";
            break;
          case ")":
            x = "(";
            break;
        }
        if (stack.length > 0) {
          let y = stack.pop();
          if (x!=y){
              flag=false;
              break;
          }
          
        } else {
          flag = false;
          break;
        }
      }
    }
    console.log(flag ? "balanced" : "unbalanced");
  }
  if (process.env.USERNAME === "HP") {
    runProgram(`{[(]}`);
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
  