class Solution {
  //Function to check if brackets are balanced or not.
  ispar(x) {
    //your code here
    if (x.length == 1) return false;
    let l = x.length;
    let stack = [];
    let table = { "{": "}", "[": "]", "(": ")" };
    for (let i = 0; i < l; i++) {
      if (x.charAt(i) == "}" || x.charAt(i) == ")" || x.charAt(i) == "]") {
        let top = stack.pop();
        let left = table[top];
        if (left != x.charAt(i)) return false;
      } else {
        stack.push(x.charAt(i));
      }
    }
    if (stack.length == 0) return true;
    return false;
  }
}
