class Solution
{
    //Function to find the length of longest common subsequence in two strings.
    lcs(x, y, s1, s2)
    {
        // code here
        s1=s1.split("")
        s2=s2.split("")
        // console.log(s1,s2)
       let table=new Array(x+1).fill().map(()=>new Array(y+1))
       
       for(let i=0;i<x+1;i++){
           for(let j=0;j<y+1;j++){
               if(i==0 || j==0)
                    table[i][j]=0;
                else if( s1[i-1]==s2[j-1])
                        table[i][j]=1+table[i-1][j-1]
                else{
                    // console.log(i,j,s1[i-1],s2[j-1])
                    table[i][j]=Math.max(table[i-1][j],table[i][j-1])
                }
                    
           }
       }
        // console.table(table)
        // console.log(table)
      return table[x][y]
    }
}
