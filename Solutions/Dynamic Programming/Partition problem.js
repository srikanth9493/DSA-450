equalPartition(arr, n)
    {
        //your code here
        let sum=arr.reduce((x,y)=>x+y,0)
        if(sum%2!=0)
            return false
        // console.log(sum)
        let K=sum/2
        
        let table=new Array(n+1).fill().map(()=>new Array(K+1))
        for(let i=0;i<n+1;i++){
            for(let j=0;j<K+1;j++){
                
                if(j==0)
                    table[i][j]=true
                else if(i==0)
                      table[i][j]=false;
                
                    
                else if(j>=arr[i-1]){
                    //  console.log(i,j,"in equal")
                    // console.log(i,j,arr[i-1],j-arr[i-1])
                     table[i][j]=table[i-1][j]||table[i-1][j-arr[i-1]]
                   
                }
                else{
                    // console.log(i,j,"in not equal")
                    table[i][j]=table[i-1][j]
                }
            }
        }
        
        if(table[n][K])
            return true
        else
            return false
    }


