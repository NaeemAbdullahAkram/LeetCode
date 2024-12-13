func repairCars(ranks []int, cars int) int64 {
	l, r := 1, math.MaxInt64-1
	for l <= r {
		resCar := cars
		m := (l+r)>>1
		for _, rank := range ranks {
			repair := int(math.Sqrt(float64(m / rank)))
			resCar -= repair
			if resCar <= 0 {
				break
			}
		}
		if resCar <= 0 {
			r = m - 1
		} else {
			l = m + 1
		}
	}
	return int64(r+1)
}