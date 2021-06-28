class Solution {
    getPairsCount(arr,n,k){
       //code here
        let table={}
        for (let i of arr){
            if(table[i]){
                table[i]=table[i]+1
            }
            else{
                table[i]=1
            }
        }
        // console.log(table)
        let count=0
        for(let i=0;i<n;i++){
            // console.log(k-arr[i],arr[i],k)
            if(table[k-arr[i]]){
                count=count+table[k-arr[i]]
                
                if(k-arr[i]==arr[i])
                      count-=1
                
                // console.log(table)
                //  table.delete(k-arr[i])
                //  console.log(arr[i],k-arr[i])
            }
            // tablearr[i])
            //  console.log(table) 
        }
      
        return count/2
        
    }
}