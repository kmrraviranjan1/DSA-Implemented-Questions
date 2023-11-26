// 1. You are given a number n.
// 2. You've to create a pattern of * and separated by tab as shown in output format.

// Input Format
// A number n
// Output Format
// * * * *
// * * *
// * *
// *

function runProgram(n){
    for(let i = 0;i<n;i++){
        let str = "*    "
        for(let j=n-1;j>i;j--){
            str += "*   "
        }
        console.log(str)
    }
}
runProgram(5)
