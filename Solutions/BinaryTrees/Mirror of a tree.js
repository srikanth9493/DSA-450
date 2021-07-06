var invertTree = function (root) {
  if (root == null) return;

  invertTree(root.left);
  invertTree(root.right);

  let temp;
  temp = root.left;
  root.left = root.right;
  root.right = temp;

  return root;
};
