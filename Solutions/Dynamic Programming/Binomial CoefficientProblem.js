class Solution{
    nCr(n, r){
        //code here
        if(r>n)
        return 0
        let table=new Array(n+1).fill(0)
        table[1]=1
        
        // let r=1
        let n=1;
        let r=1
        let k=1
        for(let i=1;i<n;i++){
            n=n*i
            
            
        }

        // console.log(table)
        
        return res%(10**9+7)
    }
}