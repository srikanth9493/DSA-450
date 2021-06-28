class Solution {
    //Function to find the height of a binary tree.
    height(node)
    {
        //your code here
        if(node==null)
                return 0
       else{
            return 1+Math.max(this.height(node.left), this.height(node.right))
        }
    }
}
Edit Code
