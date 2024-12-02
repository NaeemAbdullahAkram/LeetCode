/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**0
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {

    count = 0
    const dfs = (node, max) => {
        if(!node) return 
        if(node.val >= max){
            count++
        }
        let x = Math.max(node.val, max)
        dfs(node.left, x)
        dfs(node.right, x)
    }
    dfs(root,-10000000)
    return count
};