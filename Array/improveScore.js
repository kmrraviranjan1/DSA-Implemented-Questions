const input = `2
4 10
1 2 3 4
4 5
1 2 3 4`
const input2 = `4
4 10
1 2 3 4
4 5
1 2 3 4
4 10
1 2 3 4
4 5
1 2 3 4`

const input3=`10
6 4
1 2 3 0 0 0
5 7
2 3 4 5 6
4 8
1 2 4 7
1 5
2
3 6
5 1 2
2 2
1 1
5 2
1 2 0 0 0
8 9
1 2 3 4 5 6 7 8
5 3
2 1 3 0 0
1 8
6`

runProgram(input3)

function runProgram(input) {
    let sanititzedInput = input.split('\n')
    for (let i = 1; i < sanititzedInput.length; i += 2) {
        let testCase = sanititzedInput.slice(i, i + 2)
        const [n, m] = testCase[0].split(' ').map(ip => +ip)
        const A = testCase[1].split(' ').map(ip => +ip)
        let response = improveScore(n, m, A)
        console.log("response: ", response);
    }

}

function improveScore(n, m, A) {
    const totalMarks = A.reduce((acc,curr)=>acc+curr,0)
    const avgMarks = totalMarks/n
    const currentMarks = A[0]
    const maxGraceMarks = m-A[0]
    const maxAvailableMarks=totalMarks-currentMarks
    const maxMarksToBeAlloted = Math.min(maxGraceMarks,maxAvailableMarks)
    return currentMarks+maxMarksToBeAlloted
}
