// note it gives time limit exceed if input is large 
// brute force solution uses only array to get desired result
function runProgram(input) {
    // let newInput = input.split(/[\r\n]+/);
     let newInput = input.split("\n").map(function (data) {
         return data.trim()
     });
    //  console.log(newInput)
     for(let t=1;t<newInput.length;){
         let n = Number(newInput[t])
        //  console.log('n:', n)
         
         let data = newInput.slice(t+1,t+n+1).map(row=>row.split(''))
        //  console.log('data:', data)
         const res = anagramPair(n,data)
         console.log(res)
        t=t+n+1;
     }
 }
 const anagramPair = (len,data)=>{
    //  console.log('data:', data)
  data.forEach((elem) => {
    
      elem.sort()
     
  });
//   console.log(data.join(''))
  let count = 0;
  for(let i=0;i<len;i++){
      for(let j=i+1;j<len;j++){
          if(compare(data[i],data[j])){
              count++
          }
      }
  }
  return count
 }
 const compare = (a1,a2)=>{
     for(let i=0;i<10;i++){
         if(a1[i]!==a2[i]){
            return false
         }
     }
     return true
 }
 if (process.env.USERNAME === "HP") {
     runProgram(`2
     5
     aaaaabbbbb
     baabbbbaaa
     aaaabbbbba
     xxxxxxxxxy
     yxxxxxxxxx
     2
     abcdefghij
     jighdefabc`)
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