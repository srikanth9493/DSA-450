var nextPermutation = function(nums) {
    if(nums.length==1)
        return nums
    
    let end=nums.length-2
    let last=nums.length-1
    while(nums[end]>=nums[end+1] && end>=0){
      end--;
    }
    
    if(end==-1){
        let start=0;
        let end=nums.length-1
        while(start<end){
            let temp=nums[start]
            nums[start]=nums[end]
            nums[end]=temp;
            start++
            end--
          
        }
          console.log("in asencding")
        
        return nums;
        
    }
        
    
    console.log(nums,'after')
    
    while(nums[end]>=nums[last] && end<last){
        last--
        
    }
    
    
    let temp=nums[last]
    nums[last]=nums[end]
    nums[end]=temp;
    console.log(nums,'after swaping')
    
    
    let start=end+1
    let final_end=nums.length-1
    
    while(start<final_end){
        let temp=nums[start]
        nums[start]=nums[final_end];
        nums[final_end]=temp;
        start++
        final_end--
    }
    
    console.log(nums,'final result')
    return nums;
    
     
    
    
};