function runProgram(input, n) {
  let arr = input;
  mergeSort(arr);
  console.log(arr);
}
const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  mergeSort(left);
  mergeSort(right);
  merge(left, right, arr);
};

const merge = (l, r, a) => {
  let nl = l.length;
  let nr = r.length;
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < nl && j < nr) {
    if (l[i] < r[j]) {
      a[k] = l[i];
      i++;
    } else {
      a[k] = r[j];
      j++;
    }
    k++;
  }
  while (i < nl) {
    a[k] = l[i];
    i++;
    k++;
  }
  while (j < nr) {
    a[k] = r[j];
    j++;
    k++;
  }
};

const arr = [2, 7, 4, 1, 5, 3];
runProgram(arr, 6);
