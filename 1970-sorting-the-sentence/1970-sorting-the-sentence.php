class Solution {

    /**
     * @param String $s * @return String */ function sortSentence($s) {
    $temps =[]; $i = $j = 0; $sentenseArrays = explode(" ",$s); for ($i=0; $i < sizeof($sentenseArrays); $i++) { preg_match('!\d+!', $sentenseArrays[$i], $matches[]);
        $temps[$i]['keys'] = $matches[$i][$j]; $temps[$i]['sentences'] = preg_replace('/[0-9]+/', '', $sentenseArrays[$i]); } sort($temps);
        foreach ($temps as $temp) {
          $sentences[] = $temp['sentences']; 
        }
        return implode(" ",$sentences);} 
}