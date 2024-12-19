class Solution {
    fun maxChunksToSorted(arr: IntArray): Int {
        var chunkCount = 0
        var max = Integer.MIN_VALUE
        
        for (i in 0 until arr.size) {
            max = maxOf(max, arr[i])
            if (max == i) {
                chunkCount++
                max = Integer.MIN_VALUE
            }
        }
        return chunkCount
    }
}