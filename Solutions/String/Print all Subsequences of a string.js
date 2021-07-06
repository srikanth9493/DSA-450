function subSeq(s, i, n, a) {
  if (i == n) {
    console.log(a);
    return;
  }
  subSeq(s, i + 1, n, a);
  subSeq(s, i + 1, n, a + s.charAt(i));
}
let s = "abc";
subSeq(s, 0, s.length, "");
