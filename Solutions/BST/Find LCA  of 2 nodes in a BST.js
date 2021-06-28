class Solution 
{
    //Function to find the lowest common ancestor in a BST.
    LCA(root, n1, n2)
    {
        //your code here
        if(!root) return null
        //   console.log(root.data,root.data)
        if(root.data==n1 || root.data==n2) return root
        let left=this.LCA(root.left,n1,n2)
        let right=this.LCA(root.right,n1,n2)
      
        if(left && right) return root
        if(!left && !right) return null
        
        return left?left:right;
        
    }
        
} 
