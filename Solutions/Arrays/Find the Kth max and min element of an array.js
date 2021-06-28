import heapq
class Solution:
    def kthSmallest(self,arr, l, r, k):
        '''
        arr : given array
        l : starting index of the array i.e 0
        r : ending index of the array i.e size-1
        k : find kth smallest element and return using this function
        '''
        heapq.heapify(arr)
        i=0
        ele=0
        while(i<k):
            ele=heapq.heappop(arr)
            i+=1
        
        return ele;