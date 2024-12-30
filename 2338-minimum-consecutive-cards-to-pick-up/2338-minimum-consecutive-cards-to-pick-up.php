class Solution {

    /**
     * @param Integer[] $cards
     * @return Integer
     */
    function minimumCardPickup($cards) {
        // creating the dictionary of indices
        $dict = [];
        for($i = 0; $i < count($cards); $i++) {
            $val = $cards[$i];
            if(!array_key_exists($val, $dict)) {
                $dict[$val] = [];
            }
            $dict[$val][] = $i;
        }
        // looking for the shortest distance
        $min = PHP_INT_MAX;
        foreach($dict as $sub) {
            if(count($sub) < 2) continue;

            for($i = 1; $i < count($sub); $i++) {
                // we add 1 to the distance to include the starting card
                $distance  = $sub[$i] - $sub[$i-1] + 1;
                if($distance < $min) $min = $distance;
            }
        }
        return $min < PHP_INT_MAX ? $min : -1;
    }
}