lass Solution {
    
    constructor(){
         this.index=0
    }
    
  	binaryTreeToBST(root){
  		//code here
  		let temp=[]
  		this.sortArray(root,temp)
  		temp.sort((a,b)=>a-b)
  		// console.log(temp)
  		this.createTree(root,temp)
        
  		return root
  		
  	}
  	sortArray(root,ls){
  	    if(!root) return
  	    ls.push(root.data)
  	    this.sortArray(root.left,ls)
  	    this.sortArray(root.right,ls)
  	   
  	}
  	
  	createTree(root,ls){
  	 //   2 5 14 
  	    if(!root) return 
  	  
  	    this.createTree(root.left,ls)
  	 //   console.log(this.index)
         root.data=ls[this.index]
         this.index++;
  	    this.createTree(root.right,ls)
  	     
  	    
  	}
}