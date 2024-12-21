/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 */
var maxKDivisibleComponents = function (n, edges, values, k) {
    if (n === 1) return values[0] % k === 0 ? 1 : 0;
    const adjacencyList = new Map();

    for (const [x, y] of edges) {
        if (!adjacencyList.has(x)) adjacencyList.set(x, []);
        if (!adjacencyList.has(y)) adjacencyList.set(y, []);
        adjacencyList.get(x).push(y);
        adjacencyList.get(y).push(x);
    }
    let totalComponents = 0;

    const visited = Array(n).fill(false);

    const dfs = (node) => {
        visited[node] = true;
        let value = values[node];

        for (const neighbor of adjacencyList.get(node)) {
            if (!visited[neighbor]) {
                value += dfs(neighbor);
            }
        }

        if (value % k === 0) {
            totalComponents++;
            return 0;
        }
        return value;
    };

    dfs(0);

    return totalComponents;
};