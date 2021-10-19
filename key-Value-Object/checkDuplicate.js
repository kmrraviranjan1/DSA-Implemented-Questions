
function runProgram(input) {
    // let newInput = input.split(/[\r\n]+/);
     let newInput = input.split("\n").map(function (data) {
         return data.trim().split(' ').map(Number)
     });
    //  console.log(newInput)
     const testCases = newInput[0]
     for(let t =1;t<=testCases;t++){
         const len = newInput[t*2-1]
         const data = newInput[t*2]
         const res = checkDuplicate(len,data)
         console.log(res?'YES':'NO')
     }
 }
 const checkDuplicate= (len,data)=>{
    let map ={}
    for(let i =0;i<len;i++){
        if(data[i] in map){
            return true;
        }else{
            map[data[i]]=1
        }
    }
    return false;
 }
 if (process.env.USERNAME === "HP") {
     runProgram(`3
     1
     1
     2
     1 1
     3
     1 2 3`)
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