class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findScore($nums) {
        $res = 0;
        $heap = new SplMinHeap();
        for($i=count($nums)-1;$i>=0;$i--){
            $heap->insert([$nums[$i], $i]);
        }
        while(!$heap->isEmpty()){
            [$cur, $i] = $heap->extract();
            $res += $nums[$i];
            if($nums[$i] !== 0){
                $nums[$i] = 0;
                $l = $i-1;
                $r = $i+1;
                if($l >= 0){
                    $nums[$l] = 0;
                }
                if($r < count($nums)){
                    $nums[$r] = 0;
                }
            }
        }
        return $res;
    }
}