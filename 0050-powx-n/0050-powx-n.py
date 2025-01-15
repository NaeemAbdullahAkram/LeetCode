class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n < 0:
            x, n = 1 / x, - n

        # Example: x^11 = x^(b1011) = x^8 * x^2 * x^1
        result = 1
        while n:
            if n & 1: result *= x
            n >>= 1
            x *= x

        return result