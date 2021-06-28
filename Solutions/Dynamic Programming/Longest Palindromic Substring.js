var longestPalindrome = function(s) {
    
    let r=s.split("").reverse().join("")
    let l=s.length;
    let table=new Array(l+1).fill().map(()=>new Array(l+1))
    let max=0
    let start=0;
    let end=0
    let flag=false
    for(let i=0;i<l+1;i++){
        for(let j=0;j<l+1;j++){
            if(i==0||j==0)
                 table[i][j]=0
            else if(s.charAt(i-1)==r.charAt(j-1)){
                
                table[i][j]=1+table[i-1][j-1]
                max=Math.max(max,table[i][j])
              
            }
            else{
              
                end=j-1
                table[i][j]=0
            }
        }
    }
    // console.table(table,start,end)
    return max;
    
};


