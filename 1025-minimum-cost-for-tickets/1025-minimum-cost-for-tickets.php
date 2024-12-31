class Solution {

    /**
     * @param Integer[] $days
     * @param Integer[] $costs
     * @return Integer
     */
    function mincostTickets($days, $costs) {
        $dp = array_fill(0, 366, 0);
        $j = 0;
        
        for ($i = 1; $i <= 365; $i++) {
            if ($j < count($days) && $i == $days[$j]) {
                $dp[$i] = min(
                    $dp[max(0, $i - 1)] + $costs[0],
                    $dp[max(0, $i - 7)] + $costs[1],
                    $dp[max(0, $i - 30)] + $costs[2]
                );
                $j++;
            } else {
                $dp[$i] = $dp[$i - 1];
            }
        }
        
        return $dp[365];
    }
}