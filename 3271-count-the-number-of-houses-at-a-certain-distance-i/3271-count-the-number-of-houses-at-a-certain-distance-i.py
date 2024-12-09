class Solution:
    def countOfPairs(self, n: int, x: int, y: int) -> List[int]:
        houseX=x
        houseY=y
        totalHouses=n
        if houseY < houseX:
            houseX, houseY = houseY, houseX

        result = [0] * totalHouses
        cycle = houseY - houseX + 1
        halfCycle = (cycle - 1) >> 1
        tail1 = houseX - 1
        tail2 = totalHouses - houseY
        totalTailToTail = tail1 + tail2 + 1 + (houseX != houseY)

        for i in range(halfCycle):
            result[i] = cycle * 2
        if cycle % 2 == 0:
            result[halfCycle] = cycle
            
        for i in range(1, totalTailToTail):
            result[i - 1] += (totalTailToTail - i) * 2
        if houseX != houseY:
            result[0] -= 2
            for tail in [tail1, tail2]:
                for i in range(1, tail + 1):
                    result[i] -= 2

        for tail in [tail1, tail2]:
            for i in range(1, tail + halfCycle):
                result[i] += 4 * min([tail, halfCycle, i, tail + halfCycle - i])
            if cycle % 2 == 0:
                for i in range(1, tail + 1):
                    result[i + halfCycle] += 2

        return result

            