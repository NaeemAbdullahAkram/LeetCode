class Solution {
    function minimumDeleteSum($s1, $s2) {
        $dp = array_fill(0, (strlen($s1) + 1), array_fill(0, (strlen($s2) + 1), 0));

        for ($i = 1; $i <= strlen($s1); $i++)
            $dp[$i][0] = $dp[$i - 1][0] + ord($s1[$i - 1]);
        
        for ($j = 1; $j <= strlen($s2); $j++)
            $dp[0][$j] = $dp[0][$j - 1] + ord($s2[$j - 1]);
        
        for ($i = 1; $i <= strlen($s1); $i++) {
            for ($j = 1; $j <= strlen($s2); $j++) {
                if ($s1[$i - 1] == $s2[$j - 1]) {
                    $dp[$i][$j] = $dp[$i - 1][$j - 1];
                } else {
                    $dp[$i][$j] = min($dp[$i - 1][$j] + ord($s1[$i - 1]), $dp[$i][$j - 1] + ord($s2[$j - 1]));
                }
            }
        }
        
        return $dp[strlen($s1)][strlen($s2)];
    }
}