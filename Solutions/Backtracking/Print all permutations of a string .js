function permutation(str, index, len) {
  if (index == len - 1) {
    console.log(str);
    return;
  }
  for (let i = index; i < len; i++) {
    let temp = str[i];
    str[i] = str[index];
    str[index] = temp;
    permutation(str, index + 1, len);
    temp = str[i];
    str[i] = str[index];
    str[index] = temp;
  }
}
let s = "abcd";
permutation(s.split(""), 0, s.length);