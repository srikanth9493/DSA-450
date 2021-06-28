class Solution 
{
    //Function to find length of longest increasing subsequence.
    longestSubsequence(n, a)
    {
        // code here
        let ls=new Array(n)
       ls[0]=1
       for(let i=1;i<n;i++){
           ls[i]=1
           for(let j=0;j<i;j++){
                if(a[i]>a[j] && ls[i]<ls[j]+1){
                    ls[i]=ls[j]+1
                }
           }
       }
    //   console.log(ls)
       const res=Math.max(...ls)
       return res
    }
}