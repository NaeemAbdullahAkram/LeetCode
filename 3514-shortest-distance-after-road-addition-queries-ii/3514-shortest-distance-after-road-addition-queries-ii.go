func findIndex(d []int, v int) int {
    l, r := 0, len(d) - 1
    for l < r {
        m := (l + r) / 2
        if d[m] < v {
            l = m + 1
        } else {
            r = m
        }
    }
    return l
}
func shortestDistanceAfterQueries(n int, queries [][]int) []int {
    d := make([]int, n)
    for i := range d {
        d[i] = i
    }
    
    ans := make([]int, len(queries))
    for i, q := range queries {
        from, to := findIndex(d, q[0]), findIndex(d, q[1])
        if from != to {
            d = append(d[:from + 1], d[to:]...)
        }
        ans[i] = len(d) - 1
    }
    return ans
}