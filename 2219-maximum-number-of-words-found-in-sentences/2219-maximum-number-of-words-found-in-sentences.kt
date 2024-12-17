class Solution {
    fun mostWordsFound(sentences: Array<String>): Int {
        var result = 0
        sentences.forEach { sentence -> 
            val count = sentence.split(" ").size
            if(count > result) {
                result = count
            }
        }
        return result
    }
}