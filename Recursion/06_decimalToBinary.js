function runProgram() {
  let n = 27;
  let binary = convert(n);
}

const convert = (n) => {
  if (n === 0) {
    return;
  } else {
    convert(Math.floor(n / 2));
    console.log(n % 2);
  }
};

runProgram()