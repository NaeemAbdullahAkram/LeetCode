type Pair struct {
	Cnt int
	Ch rune
}

type MinHeap []Pair

// MinHeap implement at the end

func minimizeStringValue(s string) string {
	cnt := make(map[rune]int)
	for _, c := range s {
		if c != '?' {
			cnt[c]++
		}
	}

	pq := make(MinHeap, 0)
	heap.Init(&pq)
	for i := 0; i < 26; i++ {
        ch := rune(int('a') + i)
		heap.Push(&pq, Pair{cnt[ch], ch})
	}

	memo := make([]int, 26)
	for _, c := range s {
		if c == '?' {
			it := heap.Pop(&pq).(Pair)
			ch := it.Ch
			cnt[ch]++
			heap.Push(&pq, Pair{cnt[ch], ch})
			memo[int(ch) - int('a')]++
		}
	}

	cur := 0
    res := make([]rune, len(s))
	for i, ch := range s {
        for cur < 26 && memo[cur] == 0 {
            cur++
        }

		if ch == '?' {
            res[i] = rune(int('a') + cur)
            memo[cur]--
		} else {
            res[i] = rune(ch)
        }
	}

	return string(res)
}

func (h MinHeap) Len() int { 
    return len(h) 
}

func (h MinHeap) Less(i, j int) bool { 
    if (h[i].Cnt == h[j].Cnt) {
        return h[i].Ch < h[j].Ch
    }
    return h[i].Cnt < h[j].Cnt 
}
func (h MinHeap) Swap(i, j int) { 
    h[i], h[j] = h[j], h[i] 
}

func (h *MinHeap) Push(x interface{}) {
	*h = append(*h, x.(Pair))
}

func (h *MinHeap) Pop() interface{} {
	tmp := *h
	n := len(tmp)
	res := tmp[n - 1]
	*h = tmp[0 : n - 1]
	return res
}