func countSubarrays(nums []int, k int) int {
    n := len(nums)
    cnt := map[int]int{}
    p := -1
    for i, num := range nums {
        if num == k {
            p = i
            break
        }
    }
    bal := 0
    for i := p; i < n; i++ {
        if nums[i] == k {
            bal += 0
        } else if nums[i] < k {
            bal -= 1
        } else {
            bal += 1
        }
        if _, ok := cnt[bal]; !ok {
            cnt[bal] = 1
        } else {
            cnt[bal]++
        }
    }
    res := 0
    bal = 0
    for i := p; i >= 0; i-- {
        if nums[i] == k {
            bal += 0
        } else if nums[i] < k {
            bal -= 1
        } else {
            bal += 1
        }
        res += cnt[-bal] + cnt[-bal+1]
    }
    return res
}