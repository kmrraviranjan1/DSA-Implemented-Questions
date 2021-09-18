let arr = [1,22,73,4,5]



const productArray=(arr,n,product)=>{
    if(n===0){
        return  product;
    }
    product=product*arr[n-1]
    return productArray(arr,--n,product)
}

runProgram(arr)
function runProgram(input){
    let n = input.length;
    let arr = input;
    let x = productArray(arr,n,1)
    console.log('x:', x)
}
