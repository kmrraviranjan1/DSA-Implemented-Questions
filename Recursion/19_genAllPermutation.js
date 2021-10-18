function runProgram() {
  let string = "abc";
  let n = string.length - 1;
  let res = gp(string, 0, n);
}

const gp = (s, l, r) => {
  if (l === r) {
    console.log(s);
    return;
  } else {
    for (let i = l; i <= r; i++) {
      s = swap(s, l, r);
      gp(s, l++, r);
    }
  }
};

const swap = (s, l, r) => { 
  if (l === r) {
    return s;
  }
  cL = s[l];
  cR = s[r];
  left = s.substring(0, l);
  middle = s.substring(l + 1, r);
  right = s.substring(r + 1);
  if (right === undefined) {
    right = "";
  }
  if (left === undefined) {
    left = "";
  }
  if (middle === undefined) {
    middle = "";
  }
  if (cR === undefined) {
    cR = "";
  }
  if (cL === undefined) {
    cL = "";
  }

  s = left + cR + middle + cL + right;
  return s;
};
//   runProgram();
runProgram();
