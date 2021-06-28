class Solution {
    
    findPath(m,n){
        //code here
       let table = new Array(m.length).fill().map(() => new Array(m[0].length));
         let ans=[]
            this.getPath(m, n, 0, 0, m[0].length - 1, m.length - 1, table, "",ans);
        ans.sort()
        return ans
    }
    
    getPath(m, n, i, j, width, height, table, path, ans){
        if (i < 0 || i > height || j < 0 || j > width || table[i][j] == 1) {
        return;
         }
       if (m[i][j] == 0) return;
         table[i][j] = 1;


  if (i == width && j == height) {
   
    ans.push(path);
  }
  this.getPath(m, n, i, j + 1, width, height, table, path + "R", ans); //left
  this.getPath(m, n, i, j - 1, width, height, table, path + "L", ans); //right
  this.getPath(m, n, i - 1, j, width, height, table, path + "U", ans); //down
  this.getPath(m, n, i + 1, j, width, height, table, path + "D", ans); //up
  table[i][j] = 0;
       
       
        
    }
}
