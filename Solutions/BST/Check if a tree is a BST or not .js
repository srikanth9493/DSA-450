isBST(root,min=null,max=null)
    {
          
        
        if(!root) true
        if(min && root.data<=min.data)  return false
        if(max && root.data>=max.data) return false
        return this.isBST(root.left,min,root) &&this.isBST(root.right,root,max)
        
    }