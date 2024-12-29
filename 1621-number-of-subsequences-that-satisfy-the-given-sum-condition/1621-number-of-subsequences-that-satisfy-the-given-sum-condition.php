class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer
     */
    function numSubseq($nums, $target) {
        $mod = 1000000007;
        $n = count($nums);
        $ans = 0;
        $left = 0;
        $right = $n - 1;
        sort($nums);

        while ($left <= $right) {
            if ($nums[$left] + $nums[$right] > $target) {
                $right--;
            } else {
                $ans = ($ans + bcpowmod(2, $right - $left, $mod)) % $mod;
                $left++;
            }
        }

            return $ans;
}


}