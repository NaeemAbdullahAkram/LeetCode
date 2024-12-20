/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func reverseOddLevels(root *TreeNode) *TreeNode {
    q := []*TreeNode{root}
    oddLevel := false
    for len(q) > 0 {
        levelSize := len(q)
        if oddLevel {
            for l, r := 0, levelSize - 1; l < r; {
                q[l].Val, q[r].Val = q[r].Val, q[l].Val
                l++
                r--
            }
        }
        for range levelSize {
            now := q[0]
            q = q[1:]
            if now.Left != nil && now.Right != nil {
                q = append(q, now.Left, now.Right)
            } 
        }
        oddLevel = !oddLevel
    }
    return root
}