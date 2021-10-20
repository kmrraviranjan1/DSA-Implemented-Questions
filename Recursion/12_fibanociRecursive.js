
function runProgram(input) {
    // let newInput = input.split(/[\r\n]+/);
     let newInput = Number(input)
    //  console.log(newInput)
     const res = fibonaci(newInput)
     console.log(res)
 }

 const fibonaci = (n)=>{
     if(n<2){
         return n;
     }
     return fibonaci(n-1) + fibonaci(n-2)
 }
 if (process.env.USERNAME === "HP") {
     runProgram(`4`)
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