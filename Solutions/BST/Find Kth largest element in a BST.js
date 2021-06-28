class Solution {
	// return the Kth largest element in the given BST rooted at 'root'
	constructor(){
	    this.count=0
	}
  	kthLargest(root,K){
  	    
  	    
  		//code here

  		if(root){
  		  let right= this.kthLargest(root.right,K)
  		  if(right)
  		        return right
  		    this.count++;
  		    // console.log(this.count,root.data)
  		    if(this.count==K)
  		    {
  		        // console.log(root.data)
  		        return root.data
  		    }
  		    let left=this.kthLargest(root.left,K)
  		    if(left)
  		        return left
  		}
  		
  		
  	}
}
