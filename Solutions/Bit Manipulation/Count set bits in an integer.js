class Solution {
    
    setBits(n)
    {
        //your code here
        let count=0
      
    while (n){
        count += n & 1
        n =n>>1 
    }
    return count
        
    
      
    }
}

