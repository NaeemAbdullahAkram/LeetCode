class Solution {
public:
    vector<string> findAllRecipes(vector<string>& recipes,
                                  vector<vector<string>>& ingredients,
                                  vector<string>& supplies) {

        unordered_map<string, int> indegree;
        unordered_map<string, vector<string>> adjList;
        queue<string> q;
        vector<string> ans;
        unordered_set<string> recps(recipes.begin(), recipes.end());
        unordered_set<string> sup(supplies.begin(), supplies.end());

        // lets create the adjacency list
        for (int i = 0; i < recipes.size(); i++) {
            // ingredients needed for current recipe
            vector<string> ing = ingredients[i];

            // lets traverse ingredients of current recipe
            for (auto it : ing) {
                adjList[it].push_back(recipes[i]);
                indegree[recipes[i]]++;
            }
        }

        // All the supplies are raw materials, so they have indegree 0 and can
        // be put into queue
        for (auto it : supplies) {
            q.push(it);
        }


        // Normal bfs procedure
        while (!q.empty()) {
            string item = q.front();
            q.pop();

            // if the current item(node) is a recipe, then put it into ans
            if (recps.find(item) != recps.end())
                ans.push_back(item);

            for (auto adjItem : adjList[item]) {
                indegree[adjItem]--;
                if (indegree[adjItem] == 0) {
                    q.push(adjItem);
                }
            }
        }

        return ans;
    }
};