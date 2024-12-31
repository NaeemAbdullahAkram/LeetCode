import (
	"math/bits"
)

func countPrimeSetBits(left int, right int) (cnt int) {
	for i := uint(left); i <= uint(right); i++ {
		switch bits.OnesCount(i) {
		case 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31:
			cnt++
		}
	}

	return
}