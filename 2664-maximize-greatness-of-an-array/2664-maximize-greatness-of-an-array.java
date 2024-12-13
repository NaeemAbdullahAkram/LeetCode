class Solution {
    public int maximizeGreatness(int[] nums) {
        int left = 0;
        int right = 1;
        int counter = 0;
        
        Arrays.sort(nums);
        
        while(right < nums.length) {
            if(nums[left] != nums[right]) {
                counter++;
                left++;
            }
            right++;
        }
        return counter;
    }
}