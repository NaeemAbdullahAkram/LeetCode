class Solution {
    function pickGifts($gifts, $k) {
        for($i = 0; $i < $k; $i++){
        sort($gifts);
        $el = floor(sqrt(array_pop($gifts)));
        array_push($gifts, $el);
    }
    return array_reduce($gifts, function($a, $b) {return $a + $b;}); 
    }
}