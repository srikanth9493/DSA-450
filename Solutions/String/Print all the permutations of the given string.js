function permutaion(s, index, n) {
  if (index == n) {
    console.log(s);
    return;
  }

  for (let i = index; i <= n; i++) {
    let temp = s[i];
    s[i] = s[index];
    s[index] = temp;

    permutaion(s, index + 1, n);

    temp = s[i];
    s[i] = s[index];
    s[index] = temp;
  }
}

let i = 0;
let s = ["a", "b", "c"];
permutaion(s, i, s.length - 1, "");
