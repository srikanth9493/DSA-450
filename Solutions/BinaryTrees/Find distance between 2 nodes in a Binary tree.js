class Solution {
  findDist(root, a, b) {
    //code here
    if (!root) return -1;

    let commonNode = this.lca(root, a, b);
    //   console.log(commonNode,"hai")
    if (!commonNode.data) return -1;
    let m = this.disFromParentToNode(commonNode, a, 0);
    let n = this.disFromParentToNode(commonNode, b, 0);
    return m + n;
  }

  lca(root, n1, n2) {
    if (!root) return null;
    if (root.data == n1 || root.data == n2) return root;
    let left = this.lca(root.left, n1, n2);
    let right = this.lca(root.right, n1, n2);

    if (left && right) return root;
    if (!left && !right) return null;
    return left ? left : right;
  }

  disFromParentToNode(root, n1, level) {
    if (!root) return -1;
    if (root.data == n1) return level;

    let d = this.disFromParentToNode(root.left, n1, level + 1);
    if (d != -1) return d;

    d = this.disFromParentToNode(root.right, n1, level + 1);
    return d;
  }
}
