const input = `3 3 6
3 2 1
2 2 2
1 5 1`
// exptected 4

// row 1
// row 3
// col 1
// col 3
// diag up 3
// diag up 4
// diag down 1
//       my code
// count 1     1
// count 2     2
// count 3     3
// count 4     4
const input2 = `4 4 11
1 2 1 8
2 2 8 6
8 1 2 5
2 5 8 6`
// exptected 7
function runProgram(input) {
    const [[n, m, s], ...matrix] = input.split("\n").map(data => data.split(' ').map(n => +n))
    // console.log("matrix: ", matrix);
    // matrix.forEach(col => { console.log(col) })
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // row sum
            if (j + 3 <= m) {
                let sum = matrix[i][j] + matrix[i][j + 1] + matrix[i][j + 2]
                if (sum === s) count++
            }

            // col sum

            if (i + 3 <= n) {
                let sum = matrix[i][j] + matrix[i + 1][j] + matrix[i + 2][j]
                if (sum === s) count++
            }
            // diag down sum
            if (i + 3 <= n && j + 3 <= m) {
                let sum = matrix[i][j] + matrix[i + 1][j + 1] + matrix[i + 2][j + 2]
                if (sum === s) count++
            }
            // diag up sum
            if (j + 3 <= m && i - 2 >= 0) {
                let sum = matrix[i][j] + matrix[i - 1][j + 1] + matrix[i - 2][j + 2]
                if (sum === s) count++
            }
            // console.log("count: ", count);
        }
    }
    console.log(count);
}
runProgram(input2)