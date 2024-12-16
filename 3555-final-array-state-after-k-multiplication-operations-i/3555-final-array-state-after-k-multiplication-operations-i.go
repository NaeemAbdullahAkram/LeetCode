func getFinalState(nums []int, k int, multiplier int) []int {
  var items []*Item

  for i, num := range nums {
    items = append(items, &Item{
      index: i,
      val: num,
    })
  }

  h := &MinHeap{
    array: items,
    original: nums,
  }
  heap.Init(h)

  for k > 0 {
    el := heap.Pop(h).(*Item)
    heap.Push(h, &Item{
      index: el.index,
      val: el.val*multiplier,
    })
    k--
  }

  return h.original
}

type Item struct {
  index int
  val int
}

type MinHeap struct {
  array []*Item
  original []int
}
func (h MinHeap) Len() int { return len(h.array) }
func (h MinHeap) Swap(i, j int) { h.array[i], h.array[j] = h.array[j], h.array[i] }
func (h MinHeap) Less(i, j int) bool {
  if h.array[i].val == h.array[j].val {
    return h.array[i].index < h.array[j].index
  }
  return h.array[i].val < h.array[j].val
}
func (h *MinHeap) Push(x any) {
  item := x.(*Item)
  h.array = append(h.array, item)
  h.original[item.index] = item.val
}
func (h *MinHeap) Pop() any {
  old := h.array
  n := len(old)
  x := old[n-1]
  h.array = old[:n-1]
  return x
}