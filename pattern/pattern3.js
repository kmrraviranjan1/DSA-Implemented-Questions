// 1. You are given a number n.
// 2. You've to create a pattern of * and separated by tab as shown in output format.

//                     *
//                 *   *
//             *   *   *
//         *   *   *   *
//     *   *   *   *   *
// *   *   *   *   *   *

function runProgram(n) {
  for (let outerLoop = 1; outerLoop <= n; outerLoop++) {
    let str = "";
    for (let innerLoop = n; innerLoop >= 1; innerLoop--) {
      if (innerLoop <= outerLoop) {
        str += "*    ";
      } else {
        str += "     ";
      }
    }
    console.log(str);
  }
}
runProgram(5);
