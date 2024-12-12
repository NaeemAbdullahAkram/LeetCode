class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
function alternateDigitSum($n) {
  $nums = str_split($n);
  $result = 0;
  foreach ($nums as $i => $num) {
    if ($i % 2 != 0) $result -= $num;
    if ($i % 2 == 0) $result += $num;
  }
  return $result;
}
}