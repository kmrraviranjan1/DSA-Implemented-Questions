function runProgram() {
  let string = "abc";
  let res = gss(string, "");
}

const gss = (s, res) => {
  if (s.length === 0) {
    console.log(res);
    return;
  } else {
    gss(s.substring(1), res);
    gss(s.substring(1), res + s.charAt(0));
  }
};
runProgram();
