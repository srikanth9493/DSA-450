class Solution {
    count(S,m,n){
        //code here
      let table=new Array(n+1).fill(0)
      table[0]=1
      for(let i=0;i<m;i++){
          for(let j=S[i];j<=n;j++){
              table[j]+=table[j-S[i]]
          }
      }
        // console.log(table)
        return table[n]
    }
}
