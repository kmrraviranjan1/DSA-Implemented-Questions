
function runProgram(input) {
    // let newInput = input.split(/[\r\n]+/);
     let newInput = input.split("\n").map(function (data) {
         return data.trim()
     });
    //  console.log(newInput)
     const len = Number(newInput[0])
     const str = newInput[1].split('')
    //  console.log('str:', str)
     str.sort()
     const map ={}
     for(let i =0;i<len;i++){
         if(str[i] in map){
             map[str[i]]++
         }else{
             map[str[i]]=1
         }
     }
    //  console.log(map)
    for(key in map){
        console.log(key+'-'+map[key])
    }
 }
 if (process.env.USERNAME === "HP") {
     runProgram(`4
     aman`)
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