class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function longestContinuousSubstring($s) {
       
        if (strlen($s) === 1) {
            return 1;
        }

        $alphabet = array_flip(range('a', 'z'));

        $longestSubstring = 1;
        $currentSubstring = 1;
        $lastChar = $alphabet[$s[0]] + 1;

        for ($i = 1; $i < strlen($s); $i++) {
            $char = $s[$i];
            if ($alphabet[$char] === $lastChar) {
                $currentSubstring++;
            } else {
                $currentSubstring = 1;
            }

            $lastChar = $alphabet[$char] + 1;
            if ($currentSubstring > $longestSubstring) {
                $longestSubstring = $currentSubstring;
            }
        }

        return $longestSubstring;
    }
}