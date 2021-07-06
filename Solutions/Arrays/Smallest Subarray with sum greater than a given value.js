class Solution {
  sb(a, n, x) {
    //code here
    let table = new Array(n);
    let sum = 0;
    let min = n + 1;
    let i = 0;
    let start = 0;
    while (i < n) {
      while (sum <= x && i < n) {
        sum = sum + a[i];
        i++;
      }

      while (sum > x && start < i) {
        sum = sum - a[start];
        min = Math.min(i - start, min);
        start++;
      }
    }
    return min;
  }
}
