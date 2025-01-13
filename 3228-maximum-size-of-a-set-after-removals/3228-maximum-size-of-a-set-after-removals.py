class Solution:
    def maximumSetSize(self, nums1: List[int], nums2: List[int]) -> int:
        target = len(nums1) // 2
        unique1, unique2 = set(nums1), set(nums2)
        present_in_both = unique1 & unique2

        # Calculate initial removals
        removals1 = len(nums1) - len(unique1)
        removals2 = len(nums2) - len(unique2)

        # Remove elements from unique1 until target is met
        while removals1 < target:
            if present_in_both:
                n = present_in_both.pop()
                unique1.remove(n)
            else:
                unique1.pop()
            removals1 += 1

        # Remove elements from unique2 until target is met
        while removals2 < target:
            if present_in_both:
                n = present_in_both.pop()
                unique2.remove(n)
            else:
                unique2.pop()
            removals2 += 1

        # Combine remaining elements
        unique1.update(unique2)

        return len(unique1)