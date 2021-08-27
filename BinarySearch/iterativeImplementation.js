const runProgram=(input)=>{
    
    let newInput = input.split('\n').map((row) => {
        return row.split(' ').map(Number)
    })
    
    const [n, k] = newInput[0]
    const data = newInput[1]
    const result = binarySearch(n,k,data)
    console.log( result);
    
}
const binarySearch = (n, k, data) => {
    
    data.sort((a, b) => {
        return a - b;
    })
    
    let low = 0;
    
    let high = n - 1;
    
    let result = -1;
   
    while (low <= high) {
        // let mid = Math.floor((low + (high - low)) / 2)    
        let mid = parseInt(low + (high - low) / 2);    
        if (data[mid] === k) {
            result = 1
            break;
        }
        else if (data[mid] > k) {
            high=mid-1
        }
        else {
            low=mid+1
        }
       
    }
    return result;
}


runProgram(`5 0
2 -2 0 3 4`)

runProgram(`6 5
11 34 5 4 21 0`);

runProgram(`5 2
8 4 1 9 11`);