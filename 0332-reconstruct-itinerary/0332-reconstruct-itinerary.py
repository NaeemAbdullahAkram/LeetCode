from collections import defaultdict
from typing import List

class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        # Representing the graph as an ordered set (which is a dictionary in Python)
        m = defaultdict(list)
        
        # Sorting the tickets so that we can pop from the end (smallest lexical order) in O(1) time.
        tickets.sort(reverse=True)
        
        # Filling the dictionary
        for a, b in tickets:
            m[a].append(b)
        
        # List to store the result
        res = []
        
        # Post-order traversal
        self.dfs(m, "JFK", res)
        
        return res[::-1]  # Reversing to get the result
    
    def dfs(self, m: dict, s: str, res: List[str]):
        while m[s]:
            # pop() gives us the smallest lexical order while removing the ticket
            self.dfs(m, m[s].pop(), res)
        
        res.append(s)