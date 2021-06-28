var maxProfit = function(prices) {
    
    let profit1=0
    let min1=Number.MAX_VALUE
    
    let profit2=0
    let min2=Number.MAX_VALUE
    
    for(let i=0;i<prices.length;i++){
         
        min1=Math.min(min1,prices[i])
        profit1=Math.max(profit1,prices[i]-min1)
        
        min2=Math.min(min2,prices[i]-profit1)
        profit2=Math.max(profit2,prices[i]-min2)
        
    }

    
    return profit2
};