# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def getTargetCopy(self, original: TreeNode, cloned: TreeNode, target: TreeNode) -> TreeNode:
        self.res = TreeNode()
        def dfs(node1, node2):
            if not node1 and not node2:
                return
            if node1 == target:
                self.res = node2
                return node2
            return dfs(node1.left, node2.left) or dfs(node1.right, node2.right)
        
        dfs(original, cloned)
        return self.res