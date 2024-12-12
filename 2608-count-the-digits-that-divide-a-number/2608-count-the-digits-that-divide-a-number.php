class Solution {

    /**
     * @param Integer $num
     * @return Integer
     */
    function countDigits($num) {
        $st_value = strval($num);
        
        $count = 0;
        for($i=0; $i<strlen($st_value); $i++){
            if($num%$st_value[$i]==0){
                $count++;
            }
        }
        return $count;
    }
}