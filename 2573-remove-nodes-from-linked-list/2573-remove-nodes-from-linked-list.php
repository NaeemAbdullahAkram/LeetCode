class Solution {
    function removeNodes($head) {
        $q = [];
        while($head){
            while($q && end($q) < $head->val){
                array_pop($q);
            }
            $q[] = $head->val;
            $head = $head->next;
        }
        
        $r = new ListNode();
        $nh = $r;
        foreach($q as $item){
            $r->next = new ListNode($item);
            $r = $r->next;
        }
        return  $nh->next;
    }
}