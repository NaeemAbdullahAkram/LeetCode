func minCapability(nums []int, k int) int {
  if len(nums) == 1 {
    return nums[0]
  }
  min, max := nums[0], nums[0]
  for i := 0; i < len(nums); i++ {
    if nums[i] < min {
      min = nums[i]
    }
    if nums[i] > max {
      max = nums[i]
    }
  }
  left, right := min, max
  var res int
  for left <= right {
    mid := left + (right - left)/2
    if check(nums, k, mid) {
      res = mid
      right = mid - 1 // try to minimize
    } else {
      left = mid + 1
    }
  }
  return res
}

func check(nums []int, k int, target int) bool {
  var oneBack, twoBack int
  if nums[0] <= target {
    oneBack, twoBack = 1, 1
  }
  if nums[1] <= target {
    oneBack = 1
  }
  for i := 2; i < len(nums); i++ {
    var curr int
    if nums[i] <= target {
      curr = max(oneBack, 1+twoBack)
    } else {
      curr = oneBack
    }
    twoBack, oneBack = oneBack, curr
  }
  return oneBack >= k
}

func max(a, b int) int {
  if a > b {
    return a
  }
  return b
}