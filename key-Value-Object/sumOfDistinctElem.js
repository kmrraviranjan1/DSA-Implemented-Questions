
function runProgram(input) {
    // let newInput = input.split(/[\r\n]+/);
     let newInput = input.split("\n").map(function (data) {
         return data.trim().split(' ').map(Number)
     });
    //  console.log(newInput)
     const len=newInput[0]
     const data=newInput[1]
     const res = sum(len,data)
     console.log(res)
 }
 const sum = (len,arr)=>{
     let map = {}
     for(let i=0;i<len;i++){
         if(!(arr[i] in map)){
             map[arr[i]]=1;
            }
        }
        // console.log('map:', map)
        const uniques = Object.keys(map)
        // console.log('uniques:', uniques)
        let res = uniques.reduce((acc,curr)=>{
            return acc=Number(acc)+Number(curr)
        },0)
        return res;
 }
 if (process.env.USERNAME === "HP") {
     runProgram(`5
     2 2 2 1 1`)
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