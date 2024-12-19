class Solution {
    data class Node(var child: HashMap<Char, Node> = HashMap(), var isEnd: Boolean = false)

    val Trie = Node()

    fun longestWord(words: Array<String>): String {
        for(word in words) {
            insert(word)
        }
        return getLongestWord(Trie, "")
    }

    fun insert(word: String) {
        var head = Trie
        for(w in word) {
            head = head.child.getOrPut(w) {Node()}
        }
        head.isEnd = true
    }

    fun getLongestWord(head: Node, curStr: String): String {

        var str = StringBuilder(curStr)
        var maxStr = ""
        head.child.forEach { k,v -> 
            if(v.isEnd) {
                str.append(k)
                var result = getLongestWord(v, str.toString())
                if(maxStr.length < result.length || (maxStr.length == result.length && maxStr.compareTo(result) > 0)) {
                    maxStr = result
                }
                str.deleteAt(str.length - 1)
            }
        }
        return if(maxStr.length > 0) maxStr else curStr

    }
}