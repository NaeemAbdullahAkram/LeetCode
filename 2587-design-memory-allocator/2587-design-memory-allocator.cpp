#include <set>
#include <vector>
#include <algorithm>
using namespace std;

class Allocator {
private:
    vector<int> v; // Memory vector
    set<pair<int, int>> freeRanges; // Tracks free memory blocks as {start, length}

public:
    Allocator(int n) {
        v.resize(n, -1); // Initialize memory with -1 (free)
        freeRanges.insert({0, n}); // Initially, all memory is free
    }
    
    int allocate(int size, int mID) {
        for (auto it = freeRanges.begin(); it != freeRanges.end(); ++it) {
            int start = it->first;
            int length = it->second;

            if (length >= size) { // Found a suitable block
                // Allocate memory
                for (int i = start; i < start + size; i++) {
                    v[i] = mID;
                }

                // Update free ranges
                freeRanges.erase(it);
                if (length > size) { // Remaining free space after allocation
                    freeRanges.insert({start + size, length - size});
                }
                return start; // Return starting index of the allocated block
            }
        }
        return -1; // No suitable block found
    }
    
    int freeMemory(int mID) {
        int freedBlocks = 0;
        int n = v.size();
        int start = -1;

        for (int i = 0; i < n; i++) {
            if (v[i] == mID) {
                if (start == -1) {
                    start = i; // Mark the start of the block to free
                }
                freedBlocks++;
                v[i] = -1; // Free the memory
            } else if (start != -1) {
                // Merge freed block into free ranges
                freeRanges.insert({start, i - start});
                start = -1;
            }
        }
        if (start != -1) {
            freeRanges.insert({start, n - start});
        }

        // Merge adjacent free ranges
        auto it = freeRanges.begin();
        while (it != freeRanges.end()) {
            auto ne = next(it);
            if (ne != freeRanges.end() && it->first + it->second == ne->first) {
                int newStart = it->first;
                int newLength = it->second + ne->second;
                freeRanges.erase(it);
                freeRanges.erase(ne);
                freeRanges.insert({newStart, newLength});
                it = freeRanges.lower_bound({newStart, newLength}); // Revalidate iterator
            } else {
                ++it;
            }
        }

        return freedBlocks; // Return number of freed blocks
    }
};