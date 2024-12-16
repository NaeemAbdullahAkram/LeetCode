class Solution {
    fun minimumLevels(A_: IntArray): Int {
        var N = A_.size
        if (A_.sum() == 0)
            return if (N <= 2) -1 else 1
        var A = A_.map{ if (it == 0) -1 else 1 }.toIntArray()
        var L = A.copyOf()
        var R = A.copyOf()
        for (i in 1 until N) {
            var j = N - 1 - i
            L[i] += L[i - 1]
            R[j] += R[j + 1]
        }
        var ok = (0 until N - 1).filter{ L[it] > R[it + 1] }
        return if (0 < ok.size) ok[0] + 1 else -1
    }
}