func maximumBeauty(nums []int, k int) int {
	hashMap := make(map[int]int)
	for _, v := range nums {
		hashMap[v-k]++
		hashMap[v+k+1]--
	}
	sortOp := make([][2]int, 0, len(hashMap))
	for val, op := range hashMap {
		sortOp = append(sortOp, [2]int{val, op})
	}
	sort.Slice(sortOp, func(i, j int) bool {
		return sortOp[i][0] < sortOp[j][0]
	})
	maxBeauty, curBeauty := 0, 0
	for _, op := range sortOp {
		curBeauty += op[1]
		if curBeauty > maxBeauty {
			maxBeauty = curBeauty
		}
	}
	return maxBeauty
}