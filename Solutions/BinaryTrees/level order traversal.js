class Solution {
    //Function to return the level order traversal of a tree.
   
    levelOrder(node)
    {
        //your code here
        let stack=[]
        stack.push(node)
        let ans=[]
        while(stack.length>0){
            let head=stack.shift()
            if(head!=null){
                ans.push(head.data)
            stack.push(head.left)
            stack.push(head.right)
            }
            
        }
        return ans
       
    }
}