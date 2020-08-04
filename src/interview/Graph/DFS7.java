/*
Grapgh Validate Tree
Input: n = 5, and edges = [[0,1], [0,2], [0,3], [1,4]]
Output: true

Input: n = 5, and edges = [[0,1], [1,2], [2,3], [1,3], [1,4]]
Output: false

 */

import java.util.*;
public class DFS7 {

    private List<List<Integer>> adjacencyList = new ArrayList<>();
    private Set<Integer> seen = new HashSet<>();


    public boolean validTree(int n, int[][] edges) {

        if (edges.length != n - 1) return false;

        // Make the adjacency list.
        for (int i = 0; i < n; i++) {
            adjacencyList.add(new ArrayList<>());
        }
        for (int[] edge : edges) {
            adjacencyList.get(edge[0]).add(edge[1]);
            adjacencyList.get(edge[1]).add(edge[0]);
        }

        // Carry out depth first search.
        dfs(0);
        // Inspect result and return the verdict.
        System.out.println(seen);
        return seen.size() == n;
    }

    public void dfs(int node) {
        if (seen.contains(node)) return;
        seen.add(node);
        for (int neighbour : adjacencyList.get(node)) {
            dfs(neighbour);
        }
    }

    public static void main(String[] args) {

        DFS7 sol = new DFS7();

        int[][] in = new int[][]{{0,0}, {0,1}};
        System.out.println("Is it valid tree "+sol.validTree(3, in));
    }
}