class Solution {
public:
    int countPyramids(vector<vector<int>>& grid) {
        // left, inclusive
        vector<vector<int>> left(grid.size(), vector<int>(grid[0].size(), 0));
        for( int i = 0 ; i < grid.size() ; i++ ) {
            if( grid[i][0] == 1 )
                left[i][0] = 1;
            for( int j = 1 ; j < grid[i].size() ; j++ )
                if( grid[i][j] == 1 )
                    left[i][j] = left[i][j-1] + 1;
        }

        // right, inclusive
        vector<vector<int>> right(grid.size(), vector<int>(grid[0].size(), 0));
        for( int i = 0 ; i < grid.size() ; i++ ) {
            if( grid[i][grid[i].size()-1] == 1 )
                right[i][grid[i].size()-1] = 1;
            for( int j = grid[i].size()-2 ; j >= 0 ; j-- ) 
                if( grid[i][j] == 1 )
                    right[i][j] = right[i][j+1] + 1;
        }

        int ans = 0;
        // pyramidal
        vector<int> col(grid[0].size(), 0);
        for( int i = 0 ; i < grid.size() ; i++ ) {
            for( int j = 0 ; j < grid[i].size() ; j++ ) {
                int expand = min(left[i][j], right[i][j]);
                col[j] = min(col[j]+1, expand);
                ans += max(0, col[j]-1); // no one row
            }
        }

        col = vector<int> (grid[0].size(), 0);
        for( int i = grid.size()-1 ; i >= 0 ; i-- ) {
            for( int j = 0 ; j < grid[i].size() ; j++ ) {
                int expand = min(left[i][j], right[i][j]);
                col[j] = min(col[j]+1, expand);
                ans += max(0, col[j]-1); // no one row
            }
        }

        return ans;
    }
};