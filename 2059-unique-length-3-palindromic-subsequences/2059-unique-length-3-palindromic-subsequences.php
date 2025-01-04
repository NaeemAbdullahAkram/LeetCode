class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function countPalindromicSubsequence($s) {
        $alphabets = "abcdefghijklmnopqrstuvwxyz";
        $results = 0;

        for ($i = 0; $i < strlen($alphabets); $i++) {
            $char = $alphabets[$i];
            $start = strpos($s, $char);
            $last = strrpos($s, $char);

            if ($start < $last) {
                for ($j = 0; $j < strlen($alphabets); $j++) {
                    $char = $alphabets[$j];
                    $mid = strpos($s, $char, $start + 1);

                    if ($mid > -1 && $mid < $last) {
                        $results++;
                    }
                }
            }
        }

        return $results;    
    }
}