const input = `6 4
1 2 5 4 0 6`

const input2 = `8 70
2 2 2 2 3 2 3 3`

function roateArray(input) {
    const sanitizedInput = input.split('\n').map((row) => row.split(' ').map((n) => +n))
    const [length, k] = sanitizedInput[0]
    const array = sanitizedInput[1]
    const toBeShiftedTime = k % length
    let array2 = []
    for (let i = 0; i < array.length; i++) {
        let newPosition =(i-toBeShiftedTime )
        if(newPosition<0){
            newPosition = length+newPosition
        }
        array2[newPosition] = array[i]
    }
    console.log(array2.join(' '))
}

roateArray(input)


function roateArrayOne(input) {
    const sanitizedInput = input.split('\n').map((row) => row.split(' ').map((n) => +n))
    const [length, k] = sanitizedInput[0]
    const array = sanitizedInput[1]
    for (let i = 0; i < k; i++) {
        let toBeShift = array.shift(0)
        array.push(toBeShift)
    }
    console.log(array.join(' '))
}

function roateArrayTwo(input) {
    const sanitizedInput = input.split('\n').map((row) => row.split(' ').map((n) => +n))
    const [length, k] = sanitizedInput[0]
    const array = sanitizedInput[1]
    const toBeShiftedTime = k % length
    for (let i = 0; i < toBeShiftedTime; i++) {
        let toBeShift = array.shift(0)
        array.push(toBeShift)
    }
    console.log(array.join(' '))
}

function roateArrayThree(input) {
    const sanitizedInput = input.split('\n').map((row) => row.split(' ').map((n) => +n))
    const [length, k] = sanitizedInput[0]
    const array = sanitizedInput[1]
    const toBeShiftedTime = k % length
    let array2 = []
    for (let i = 0; i < array.length; i++) {
        let newPosition =(i-toBeShiftedTime )
        if(newPosition<0){
            newPosition = length+newPosition
        }
        array2[newPosition] = array[i]
    }
    console.log(array2.join(' '))
}
