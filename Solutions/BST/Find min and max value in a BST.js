class Solution 
{
    //Function to find the minimum element in the given BST.
    minValue(root)
    {
        //your code here
      
            
            if(!root.left){
                return root.data
            }
            // console.log(root.data)
           return  this.minValue(root.left)
        
    }
}