static const int iMaxValue = 10000;
static const int iMaxDigitSum = 9 * 4 + 1; // the value of the digit 9999 or 9+9+9+9

// Calculate the sum of the digits
constexpr int getSumDigits(int value) {
    int sum = 0;
    while (value > 0) {
        sum += value % 10;
        value /= 10;
    }
    return sum;
}

// precomputed digit sum array: digitSum[i] == getSumDigits(i)
constexpr auto digitSum = []()
{
    std::array<int, iMaxValue+1> digitSumArray = {};

    for(auto i=1;i<=iMaxValue;i++)
        digitSumArray[i] = getSumDigits(i);

    return digitSumArray;
}();

class Solution {
public:
    int countLargestGroup(int n) {
        int maxGroupSize;
        int maxGroupMembers;
        vector<int> groupArray(iMaxDigitSum, 0);

        // Create the group array
        for (auto loop = 1; loop <= n; loop ++) {
            groupArray[digitSum[loop]] ++;
        }

        // Sort the group array in reverse
        sort(groupArray.begin(), groupArray.end(), std::greater<>());

        // Get the value for the largest group
        maxGroupMembers = groupArray[0];
        maxGroupSize = 1;

        // Count the numbers of groups with this size
        // (from the begining)
        while ((maxGroupSize < groupArray.size())           &&
               (groupArray[maxGroupSize] == maxGroupMembers))
        {
            maxGroupSize ++;
        }

        return maxGroupSize;
    }
};