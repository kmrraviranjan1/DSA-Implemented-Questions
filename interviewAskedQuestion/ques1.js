
// Find the counts of elements of an unsorted integer array which are equal to the average of all elements of that array.
// Ex:
// Input Case 1:  
// input: [2,2,2,2,2] 
// output:  5
// solution : 2+ 2+ 2+ 2+ 2 = 10/5 ==> 2
// it contain five 2 element
// Input Case 2:  
// input: [ 1,3,2,4,5]  
// output:  1
// solution : 1+ 3+ 2+ 4+ 5 = 15/5 ==> 3
// it contain one 3 element

// const input = [1, 3, 2, 4, 5]

const input = [2,2,2,2,2]
// const input =[]

function runProgram(input) {
    if (!input) {
        return 0
    }

    let sum = 0;

    for (let no = 0; no < input.length; no++) {
        sum += input[no]
    }

    const average = sum / input.length
    let count = 0;

    for (let no = 0; no < input.length; no++) {
        if (input[no] == average) count++
    }
    return count
}

const result = runProgram(input)
console.log("result: ", result);
