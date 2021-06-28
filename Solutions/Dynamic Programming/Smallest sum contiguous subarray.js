class Solution {
    //Function to find the sum of contiguous subarray with maximum sum.
    maxSubarraySum(arr, N){
        // code here
        let max=arr[0]
        let max_untill_now=arr[0]
        for(let i=1;i<N;i++){
            max=Math.min(arr[i],max+arr[i])
            max_untill_now=Math.min(max_untill_now,max)
        }
        return max_untill_now
    } 
}