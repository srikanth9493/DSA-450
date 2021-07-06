class Solution {
  //Function to return a list containing the bottom view of the given tree.
  bottomView(root) {
    //your code here
    let map = {};
    let queue = [];
    queue.push([root, 0]);
    let min = Number.MAX_SAFE_INTEGER;
    while (queue.length != 0) {
      let [node, level] = queue.shift();
      map[level] = node;
      if (node.left) queue.push([node.left, level - 1]);
      if (node.right) queue.push([node.right, level + 1]);
      min = Math.min(min, level);
    }
    // console.log(map)
    let res = [];
    while (min in map) {
      res.push(map[min].data);
      min++;
    }
    return res;
    return "";
  }
}
ch