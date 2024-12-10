class Solution {
    fun minimumPartition(s: String, k: Int): Int {
        var num: Long = 0
        var res = 1
        for (c in s) {
            val dig = Character.getNumericValue(c)
            if (num * 10 + dig <= k) num = num * 10 + dig
            else {
                res++
                num = dig.toLong()
                if (num > k) return -1
            }
        }

        return res
    }
}