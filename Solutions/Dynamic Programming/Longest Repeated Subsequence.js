class Solution{
    LongestRepeatingSubsequence(str){
        //code here
        let l=str.length
        let table=new Array(l+1).fill().map(()=>new Array(l+1))
        // console.log(table)
        for(let i=0;i<=l;i++){
            for (let j=0;j<=l;j++){
                if(i==0|| j==0)
                     table[i][j]=0
                else if(str.charAt(i-1)==str.charAt(j-1) && i!=j){
                    table[i][j]=1+table[i-1][j-1]
                }
                else{
                    table[i][j]=Math.max(table[i-1][j],table[i][j-1])
                }
            }
        }
        return table[l][l]
    }
}