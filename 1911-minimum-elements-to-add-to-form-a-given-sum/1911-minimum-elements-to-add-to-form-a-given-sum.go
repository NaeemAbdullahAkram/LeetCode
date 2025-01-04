func minElements(nums []int, limit int, goal int) int {
	var sum int64 = 0
	for _, num := range nums {
		sum += int64(num)
	}

	diff := math.Abs(float64(goal) - float64(sum))
	return int(math.Ceil(diff / float64(limit)))
}