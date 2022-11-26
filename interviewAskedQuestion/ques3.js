// Find the average of largest and smallest numbers in an unsorted integer array?
// Eg. 
// Input Case 1:  
// input: [1, 4, 3, 2]
// output:  2.5
// solution : average = (1+4)/2 =>5/2 => 2.5

// input: [1, 4, 3, 4]
// output:  3
// solution : average = (1+4 +4)/3 =>9/3 => 3

// const input= [1, 4, 3, 2]
const input = [1, 4, 3, 4]

// let smallest = 1
// let smallestCount = 1
// let largest =1
// let largestCount = 1;

function findAverage(input) {
    if (!input) {
        return 0
    }

    let average = 0
    let smallest = input[0]
    let smallestCount = 0
    let largest = input[0]
    let largestCount = 0;

    for (let index = 0; index < input.length; index++) {
        if (input[index] <= smallest) {

            smallestCount = input[index] == smallest ? ++smallestCount : smallestCount = 1
            smallest = input[index]

        } else if (input[index] >= largest) {

            largestCount = input[index] == largest ? ++largestCount : largestCount = 1
            largest = input[index]

        }
    }


    average = (smallest * smallestCount + largest * largestCount) / (smallestCount + largestCount)

    return average
}

let result = findAverage(input)
console.log("result: ", result);