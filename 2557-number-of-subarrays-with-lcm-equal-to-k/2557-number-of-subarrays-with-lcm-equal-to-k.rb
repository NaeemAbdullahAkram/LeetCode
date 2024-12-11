# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}

def subarray_lcm(nums, k)
  output = 0
  (0...nums.length).each do |i|
    lcm = nums[i]
    (i...nums.length).each do |j|
      lcm = lcm.lcm(nums[j])
      break if lcm > k

      output += 1 if lcm == k
    end
  end
  output
end