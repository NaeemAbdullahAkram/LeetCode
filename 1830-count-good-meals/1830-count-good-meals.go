func countPairs(deliciousness []int) int {
	powers := []int{1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152}

	m := make(map[int]int)
    // put all deliciousness to map m, value is the count of that number
	for _, num := range deliciousness {
		m[num]++
	}

	total := 0
    // range the map
	for num, count := range m {
        // range the 22 powers from 2^0 to 2^21
		for _, power := range powers {
            // diff equals to the power - num, only if diff >= 0 is valid
			diff := power - num
			if diff < 0 {
				continue
			}
			if num == diff {
                // if the power was the sum of two same deliciousness numbers n, the count of ways should be A(n,n), which is count(a) * (count(a)-1)
                // (a,b) & (b,a) will be calculated twice
				total += (count * (count - 1))
			} else {
                // if two different numbers, count should be count(a) * count(b)
                // if diff is not deliciousness, the map value is 0
				total += count * m[diff]
			}
		}
	}
    // since we calculated (a,b) & (b,a) for twice, divided 2
	return (total / 2) % 1000000007
}