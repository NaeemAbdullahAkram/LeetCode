import "math"

func poorPigs(buckets int, minutesToDie int, minutesToTest int) int {
  t := minutesToTest / minutesToDie + 1
  return int(math.Ceil(math.Log2(float64(buckets)) / math.Log2(float64(t))))
}