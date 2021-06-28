class Solution {
    //Function to check whether there is a subarray present with 0-sum or not.
    subArrayExists(arr, n){
        // code here
        let table={}
        let sum=0
        for(let i=0;i<n;i++){
            sum=sum+arr[i]
            if(sum===0)
                return true
            if(table[sum]){
                return true
            }
            else{
                table[sum]="hai"
            }
            
           
        }
         console.log(table)
        
        return false
        
    }
    
}