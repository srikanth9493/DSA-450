class Solution 
{
    //Function to return max value that can be put in knapsack of capacity W.
    knapSack(W, wt, val, n)
    { 
       // code here
       let table=new Array(n+1).fill().map(()=>new Array(W+1))
    //   console.log(table)
      for(let i=0;i<n+1;i++){
          for(let j=0;j<W+1;j++){
              if(i==0|| j==0){
                //   console.log(i,j,"in i our j")
                  table[i][j]=0
              }
             else if(j>=wt[i-1]){
                //  console.log(table[i-1][j],i,j,"in else if")
                 table[i][j]=Math.max(table[i-1][j],val[i-1]+table[i-1][j-wt[i-1]])
             }
              else{
                    table[i][j]=table[i-1][j]

              }
          }
      }
    //   console.table(table)
      return table[n][W]
       
    }
}
