class Solution:
    def minOperations(self, boxes: str) -> List[int]:
        n = len(boxes)
        res = [0] * n

        val = 0
        count = 0
        for i in range(n):
            res[i] += val
            if boxes[i] == '1':
                count += 1
            val += count

        val = 0
        count = 0
        for i in range(n - 1, -1, -1):
            res[i] += val
            if boxes[i] == '1':
                count += 1
            val += count

        return res