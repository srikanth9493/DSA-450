class Solution {
    editDistance(s, t) {
        // code here
        let m=s.length+1;
        let n=t.length+1;
        let table=new Array(m).fill().map(()=>new Array(n))
        
        for(let i=0;i<m;i++){
            
            for(let j=0;j<n;j++){
                if(i==0)
                {   
                        table[i][j]=j
                }
                else if(j==0){
                    table[i][j]=i;
                }
                
                else if(s.charAt(i-1)==t.charAt(j-1)){
                
                    table[i][j]=table[i-1][j-1]
                }
                else{
                  
                    table[i][j]=1+Math.min(table[i][j-1],table[i-1][j],table[i-1][j-1])
                }
                
            }
       
        }
        //  console.log(table)
             return table[m-1][n-1]
        //
    }
}