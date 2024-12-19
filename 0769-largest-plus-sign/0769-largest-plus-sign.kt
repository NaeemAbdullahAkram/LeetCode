class Solution {
    fun orderOfLargestPlusSign(n: Int, mines: Array<IntArray>): Int {
        val rows = n
        val cols = n
        val grid = Array(rows) { IntArray(cols) { n } }

        for (m in mines) {
            grid[m[0]][m[1]] = 0
        }

        for (i in 0 until n) {
            var j = 0
            var k = n - 1
            var left = 0
            var right = 0
            var up = 0
            var down = 0

            while (j < n) {
                left = if (grid[i][j] == 0) 0 else left + 1
                grid[i][j] = minOf(grid[i][j], left)

                right = if (grid[i][k] == 0) 0 else right + 1
                grid[i][k] = minOf(grid[i][k], right)

                up = if (grid[j][i] == 0) 0 else up + 1
                grid[j][i] = minOf(grid[j][i], up)

                down = if (grid[k][i] == 0) 0 else down + 1
                grid[k][i] = minOf(grid[k][i], down)

                j++
                k--
            }
        }

        var res = 0
        for (i in 0 until n) {
            for (j in 0 until n) {
                res = maxOf(res, grid[i][j])
            }
        }
        return res
    }
}