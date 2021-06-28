class Solution {
    constructor(){
        this. view_level=-1;
        this.res=[]
    }
    leftView(root,current_level=0)
    {
        //your code here
        if(root){
            
        
        if(this.view_level<current_level){
            this.res.push(root.data)
            // console.log(root.data)
            this.view_level=current_level
        }
        
        this.leftView(root.left,current_level+1)
        this.leftView(root.right,current_level+1)
        return this.res
        }
    }
}