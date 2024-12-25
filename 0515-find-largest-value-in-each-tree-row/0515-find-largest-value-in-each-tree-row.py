# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def largestValues(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        if not root:
            return res
        q = [root]
        while q:
            len_q = len(q)
            max_elem = float("-inf")
            for i in range(len_q):
                temp = q.pop(0)
                if temp.val > max_elem:
                    max_elem = temp.val
                if temp.left:
                    q.append(temp.left)
                if temp.right:
                    q.append(temp.right)
            res.append(max_elem)
        return res
        