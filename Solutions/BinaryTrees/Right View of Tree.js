var rightSideView = function (root) {
  let max_untill = -1;
  let array = [];

  function getRightView(root, level, array) {
    if (!root) return null;
    if (max_untill < level) {
      array.push(root.val);
      max_untill = level;
    }
    getRightView(root.right, level + 1, array);
    getRightView(root.left, level + 1, array);
  }
  getRightView(root, 0, array);
  return array;
};
