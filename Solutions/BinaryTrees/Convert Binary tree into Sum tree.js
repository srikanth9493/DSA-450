class Solution {
  	toSumTree(root){
  		//code here
  		
  		// 0 4 0 20 0 12 0 
  		if(root==null) return 0;
  		let old_val=root.data;
  		root.data=this.toSumTree(root.left)+this.toSumTree(root.right)
  		
  	    return root.data+old_val;
  	
  	   
  	}
}
