class Solution {
    //Function to find the sum of contiguous subarray with maximum sum.
 
    maxSubarraySum(arr, N){
        // code here
          let max_untill=arr[0]
          let maxi=arr[0]
          
          for(let i=1;i<N;i++){
              max_untill=Math.max(max_untill+arr[i],arr[i])
              maxi=Math.max(maxi,max_untill)
          }
          return maxi;
        
    } 
}