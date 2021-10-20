
function runProgram(input) {
    // let newInput = input.split(/[\r\n]+/);
     let newInput = Number(input)
    //  console.log(newInput)
     let res = factorial(newInput)
     console.log(res)
 }
 const factorial = (n)=>{
     if(n==1){
         return n;
     }else{
         return n*factorial(n-1)
     }
 }
 if (process.env.USERNAME === "HP") {
     runProgram(`5`)
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