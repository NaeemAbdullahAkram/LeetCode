class Solution:
    def separateDigits(self, nums: List[int]) -> List[int]:
        answer = []
        hash_map = {}
        i = 0
        for num in nums:
            x = [int(y) for y in str(num)]
            for number in x:
                    hash_map[i] = number
                    i += 1   
        for value in hash_map.values():
            answer.append(value)
        return answer