class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function distinctIntegers($n) {
        $count++;
        for($i=$n;$i>0;$i--){
            if($n%$i===1){
                return $this->distinctIntegers($i)+1;
            }
        }
        return $count;
    }
}