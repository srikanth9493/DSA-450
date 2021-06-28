class Solution{
    findMinDiff(arr,n,m){
        //code here
        arr.sort((a,b)=>a-b)
        // console.log(arr)
       
        let middle=m-1
        let min=Number.MAX_SAFE_INTEGER
        for(let i=0;i<n-m+1;i++){
                min=Math.min(min,arr[middle]-arr[i]);
                middle++
              
        }
        
        return min
    }
}
