class Solution
{

  /**
   * @param String $s * @param int[] $distance
   * @return Boolean
   */
    public function checkDistances($s, $distance)
    {
        $alpha = range('a', 'z'); $s_parts = str_split($s); foreach ($alpha as $num_key => $char) {
            $char_locations = array_keys($s_parts, $char); if (!$char_locations) {
                continue;
            }

            $well_spaced_dist = $distance[$num_key]; $letter_seperation_distance = ($char_locations[1] - $char_locations[0]) - 1;

            if ($letter_seperation_distance !== $well_spaced_dist) {
                return false;
            }
        }
        return true;
    }
}