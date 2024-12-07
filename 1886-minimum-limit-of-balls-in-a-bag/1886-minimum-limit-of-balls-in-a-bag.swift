class Solution {
    func minimumSize(_ nums: [Int], _ maxOperations: Int) -> Int {
        var (l,r) = (1, nums.max()!)
        func isValidPenalty(_ mid:Int) -> Bool {
            var count = 0
            for num in nums {
                count += (num - 1) / mid
                guard count <= maxOperations else { return false }
            }
            return true
        }
        while l < r {
            let mid = (l+r)/2
            (l,r) = isValidPenalty(mid) ? (l,mid) : (mid+1,r)
        }
        return l
    }
}