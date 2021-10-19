
function runProgram(input) {
    // let newInput = input.split(/[\r\n]+/);
     let newInput = input.split("\n").map(function (data) {
         return data.trim().split(' ').map(Number)
     });
    //  console.log(newInput)
     const len = newInput[0]
     const data = newInput[1]
     const queryLen = newInput[2]
     const queries = newInput[3]
     let map ={}
     for(let i=0;i<len;i++){
         if(data[i] in map){
            map[data[i]]++
         }else{
             map[data[i]]=1;
         }
     }
     queries.forEach(element => {
           if(element in map){
               console.log('YES')
           } else{
               console.log('NO')
           }
     });
 }
 if (process.env.USERNAME === "HP") {
     runProgram(`5
     1 2 3 4 5
     3
     3 5 7`)
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