class Solution {
    function findDiagonalOrder($nums) {
        $lines = [];
        for($i=0;$i<count($nums);$i++){
            for($j=0;$j<count($nums[$i]);$j++){
                $lines[$i+$j][] = $nums[$i][$j];
            }
        }

        $res =[];
        foreach($lines as $line){
            // reverse order 
            for($i = count($line)-1;$i>=0;$i--){
                $res[] = $line[$i];
            }
        }
        return $res;
    }
}