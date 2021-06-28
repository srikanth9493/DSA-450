class Solution {
    // Function to find the trapped water between the blocks.
    
    trappingWater(arr, n)
    {
        let left=[]
        let left_maxi=-1
        for(let i=0;i<n;i++){
            left_maxi=Math.max(left_maxi,arr[i])
            left.push(left_maxi)
        }
        //your code here
        let right=[]
        right.length=n
        let right_max=0
        for(let i=n-1;i>=0;i--){
            right_max=Math.max(right_max,arr[i])
            right[i]=right_max;
        }
        
        // console.log(left)
        // console.log(right)
        let ans=0
        for(let i=1;i<n-1;i++){
            // console.log(left_maxi[i],right_max[i])
            ans=ans+(Math.min(left[i],right[i])-arr[i])
        }
        // console.log(ans)
        return ans;
        
        // for(let i-1;i<n;i++){
            
        // }
    }
}


