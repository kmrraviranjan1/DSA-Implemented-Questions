let arr = [1,2,3,4,5]



const sumArray=(arr,n,sum)=>{
    if(n===0){
        return  sum;
    }
    sum=sum+arr[n-1]
    return sumArray(arr,--n,sum)
}

runProgram(arr)
function runProgram(input){
    let n = input.length;
    let arr = input;
    let x = sumArray(arr,n,0)
    console.log('x:', x)
}
