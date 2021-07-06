class Solution {
  //Function to check whether a binary tree is balanced or not.

  isBalanced(root) {
    //your code here
    let balanced = true;

    getIsBalancde(root);
    return balanced;

    function getIsBalancde(root) {
      if (!root) return 0;

      let left = getIsBalancde(root.left);
      let right = getIsBalancde(root.right);

      if (Math.abs(left - right) > 1) balanced = false;
      return Math.max(left, right) + 1;
    }
  }
}
