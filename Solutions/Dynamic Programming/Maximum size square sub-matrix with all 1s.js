class Solution{
    maxSquare(mat,n,m){
        //code here
        let table=new Array(n+1).fill().map(()=>new Array(n+1))
        let max=0
        for(let i=0;i<n+1;i++){
            for(let j=0;j<m+1;j++){
                
                if(i==0|| j==0) 
                    table[i][j]=0;
                
                else if(mat[i-1][j-1]==1){
                   
                    table[i][j]=1+Math.min(table[i-1][j],table[i][j-1],table[i-1][j-1])
                     max=Math.max(max,table[i][j])
                }
                else{
                    table[i][j]=0;
                }
                
               
                
            }
        }
       
        return max;
        
    }
}


