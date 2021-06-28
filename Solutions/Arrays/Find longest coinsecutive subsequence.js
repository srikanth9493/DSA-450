class Solution {
    //Function to return length of longest subsequence of consecutive integers.
    findLongestConseqSubseq(arr, N){
        // code here
       arr.sort((a,b)=>a-b)
       let count=1
       let max=1
       arr=[...new Set(arr)]
        let flag=false
        let i;
       for(i=1;i<N;i++){
        //   console.log(arr[i],arr[i-1])
           if(arr[i]-arr[i-1]===1){
               count++
           }
           else{
               max=Math.max(max,count)
               count=1;
           }
       }
      
       max=Math.max(max,count)
      
       return max;
       
    }
}