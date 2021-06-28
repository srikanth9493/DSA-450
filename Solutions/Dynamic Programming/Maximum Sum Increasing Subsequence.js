class Solution {
    maxSumIS(arr,n){
        //code here
        let msis=new Array(n);
        msis[0]=arr[0]
        for(let i=0;i<n;i++){
            msis[i]=arr[i]
            for(let j=0;j<i;j++){
                if(arr[i]>arr[j] && msis[i] < msis[j]+arr[i]){
                    msis[i]=msis[j]+arr[i]
                }
            }
        }
        const max=Math.max(...msis)
        return max;
        
    }
}
