class Solution:


	def maxProduct(self,arr, n):
		# code here
		maxi=arr[0]
        mini=arr[0]
        
        prod=arr[0]
        for i in range(1,n):
            if(arr[i]<0):
                temp=maxi;
                maxi=mini;
                mini=temp;
            
            maxi=max(arr[i],arr[i]*maxi)
            mini=min(arr[i],arr[i]*mini)
            prod=max(prod,maxi)
        return prod