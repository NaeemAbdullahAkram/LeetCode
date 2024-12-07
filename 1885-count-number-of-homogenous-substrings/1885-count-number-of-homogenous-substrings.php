class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function countHomogenous($s) {
        $c = 0;
        $l = 0;
        $mod = 10**9+7;
        for($i=0; $i<strlen($s); $i++) {
            if($s[$i]!==$s[$i-1]??'') {
                $l=0;
            }
            $c += ++$l;
            $c %= $mod;
        }

        return $c;
    }
}