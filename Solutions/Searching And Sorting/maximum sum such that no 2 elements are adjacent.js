class Solution
{
    //Function to find the maximum money the thief can get.
    FindMaxSum(arr, n)
    { 
        // code here
        let table=new Array(n);
        arr=arr.map(x=>Number(x))
        
        for(let i=0;i<n;i++){
            if(i==0)
                table[i]=arr[i]
            else if(i==1)
                  table[i]=arr[i]>arr[i-1]?arr[i]:arr[i-1]
            else
                table[i]=Math.max(arr[i]+table[i-2],table[i-1])
        }
        // console.log(table)
        
        return table[n-1]
    }
}


