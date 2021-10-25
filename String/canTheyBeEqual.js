
function runProgram(input) {
    // let newInput = input.split(/[\r\n]+/);
     let newInput = input.split("\n").map(function (data) {
         return data.trim()
     });
    //  console.log(newInput)
     const testCases = newInput[0]
     for(let t=1;t<=testCases;t++){
         let len = newInput[t*3-2]
         let s1 = newInput[t*3-1]
         let s2 = newInput[t*3]
        //  console.log('s:',s1, s2)
        const res = canBeMade(len,s1,s2)
        console.log( res?'Yes':'No')

     }
 }
 const canBeMade = (len,s1,s2)=>{
    let arr1= new Array(26).fill(0)
    // console.log('arr1:', arr1)
    let arr2= new Array(26).fill(0)
    // console.log('arr2:', arr2)
    for(let i=0;i<len;i++){
        arr1[s1.charCodeAt(i)-97]++
        arr2[s2.charCodeAt(i)-97]++
        
        
        
        
        
    }
    // console.log('arr1:', arr1)
    // console.log('arr2:', arr2)
    let flag = 0;
    for(let i=0;i<26;i++){
        if(arr1[i]!=arr2[i]){
            return false;
        }
    }
    return true;
 }
 if (process.env.USERNAME === "HP") {
     runProgram(`2
     2
     ab
     ac
     3
     aba
     aab`)
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