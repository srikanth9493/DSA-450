var diameterOfBinaryTree = function (root) {
  var findLarge = (root, ans) => {
    if (!root) return 0;
    let left = findLarge(root.left, ans);
    let right = findLarge(root.right, ans);

    ans[0] = Math.max(ans[0], 1 + left + right);
    // console.log(ans,left,right,root.val)
    return 1 + Math.max(left, right);
  };

  let ans = [Number.MIN_SAFE_INTEGER];
  findLarge(root, ans);
  return ans[0] - 1;
};
