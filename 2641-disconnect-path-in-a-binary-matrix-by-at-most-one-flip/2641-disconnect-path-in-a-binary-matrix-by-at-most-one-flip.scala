object Solution {
    def isPossibleToCutPath(grid: Array[Array[Int]]): Boolean = {
        def isReachable(grid: Array[Array[Int]], i: Int, j: Int):Boolean = {
            if(i == grid.length - 1 && j == grid(0).length - 1) return true
            if(i >= grid.length || j >= grid(0).length || grid(i)(j) == 0) return false
            grid(i)(j) = 0
            isReachable(grid, i + 1, j) || isReachable(grid, i, j + 1)
        }
        if (!isReachable(grid, 0, 0)) return true
        grid(0)(0) = 1
        if (!isReachable(grid, 0, 0)) return true
        false
    }
}