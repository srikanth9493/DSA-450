class Solution {
    minJumps(arr,n){
        //code here
        if(n==1)
            return 0
        if (arr[0]==0) return -1
        let maxR=arr[0]
        let jumps=1
        let steps=arr[0]
        
        for(let i=1;i<n;i++){
            if(i==n-1)
                return jumps
            maxR=Math.max(maxR,i+arr[i])
            steps-=1
            if(steps==0){
                jumps+=1
                steps=maxR-i
                if(steps<=0)
                   return -1
            }
        }
        
        
    }
}


