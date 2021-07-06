class Solution {
  //Function to return a list of nodes visible from the top view
  //from left to right in Binary Tree.
  topView(root, level) {
    //your code here
    let table = {};
    let queue = [];
    queue.push([root, 0]);
    let min = Number.MAX_SAFE_INTEGER;
    while (queue.length != 0) {
      let temp = queue.shift();

      let level = temp[1];
      let data = temp[0];
      min = Math.min(min, level);
      //   console.log(level,data)
      if (!(level in table)) {
        table[level] = data;
      }
      if (data.left) queue.push([data.left, level - 1]);
      if (data.right) queue.push([data.right, level + 1]);
    }

    // console.log(min)
    let res = [];
    while (min in table) {
      res.push(table[min].data);
      min += 1;
    }
    return res;

    // for(let i in table){
    //     console.log(table[i].data)
    // }

    // return ""
  }
}
