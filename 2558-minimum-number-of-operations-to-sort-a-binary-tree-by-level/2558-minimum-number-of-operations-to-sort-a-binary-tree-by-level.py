from collections import deque
from typing import Optional, List

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def minimumOperations(self, root: Optional[TreeNode]) -> int:
        # Helper function to calculate the minimum swaps required to sort an array
        def minSwapsToSort(arr: List[int]) -> int:
            n = len(arr)
            arr_pos = [(value, index) for index, value in enumerate(arr)]
            arr_pos.sort()  # Sort based on value
            
            visited = [False] * n
            swaps = 0
            
            for i in range(n):
                # If already sorted or visited, skip
                if visited[i] or arr_pos[i][1] == i:
                    continue
                
                # Calculate the size of the cycle
                cycle_size = 0
                x = i
                while not visited[x]:
                    visited[x] = True
                    x = arr_pos[x][1]
                    cycle_size += 1
                
                # Add cycle size - 1 to swaps (minimum swaps for a cycle)
                if cycle_size > 1:
                    swaps += cycle_size - 1
            
            return swaps

        # Level order traversal to gather nodes level by level
        queue = deque([root])
        levels = []
        
        while queue:
            level_size = len(queue)
            level = []
            
            for _ in range(level_size):
                node = queue.popleft()
                level.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            
            levels.append(level)
        
        # Calculate total minimum operations
        total_swaps = 0
        for level in levels:
            total_swaps += minSwapsToSort(level)
        
        return total_swaps