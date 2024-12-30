class Solution {
    private array $dp;
    private int $mod = 1_000_000_007;

    /**
     * @param Integer $low
     * @param Integer $high
     * @param Integer $zero
     * @param Integer $one
     * @return Integer
     */
    function countGoodStrings(int $low, int $high, int $zero, int $one): int {
        $this->dp = array_fill(0, $high + 1, -1);
        $this->dp[0] = 1;
        $result = 0;
        for ($end = $low; $end <= $high; $end++) {
            $result += $this->dfs($end, $zero, $one);
            $result %= $this->mod;
        }

        return $result;
    }
    private function dfs(int $end, int $zero, int $one): int {
        if ($this->dp[$end] != -1) {
            return $this->dp[$end];
        }
        $count = 0;
        if ($end >= $one) {
            $count += $this->dfs($end - $one, $zero, $one);
        }
        if ($end >= $zero) {
            $count += $this->dfs($end - $zero, $zero, $one);
        }
        $this->dp[$end] = $count % $this->mod;
        return $this->dp[$end];
    }
}