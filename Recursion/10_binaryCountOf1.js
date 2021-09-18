function runProgram() {
  const n = 517;
  let res = noOfOne(n, 2);
  console.log("res:", res);
}

const noOfOne = (n,r) => {
  if (n <= 0) {
    return 0;
  }
  return (n%r) + noOfOne(n/r,r);
};
runProgram()