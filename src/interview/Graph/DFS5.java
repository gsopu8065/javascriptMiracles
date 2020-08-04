/*
Example 1:

Input: nums =
[
  [9,9,4],
  [6,6,8],
  [2,1,1]
]
Output: 4
Explanation: The longest increasing path is [1, 2, 6, 9].
Example 2:

Input: nums =
[
  [3,4,5],
  [3,2,6],
  [2,2,1]
]
Output: 4
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.

 */

public class DFS5 {
    int[][] visited;
    int m, n;
    public int longestIncreasingPath(int[][] matrix) {
        if(matrix == null || matrix.length == 0){
            return 0;
        }
        m = matrix.length;
        n = matrix[0].length;

        visited = new int[m][n];

        int maxLength = Integer.MIN_VALUE;

        for(int i=0; i < m; i++){
            for(int j =0; j < n; j++){
                int t = dfs(matrix, i, j);
                maxLength = Math.max(maxLength, t);
            }
        }

        return maxLength;
    }

    int[][] dirs = new int[][]{{0,1}, {0,-1}, {1,0}, {-1,0}};

    private int dfs(int[][] matrix, int i, int j){
        // base case
        if(visited[i][j] != 0){
            return visited[i][j];
        }

        int maxLen = 1;

        for(int[] dir : dirs){

            int row = dir[0] + i;
            int col = dir[1] + j;

            if(row < 0 || row > m-1 || col < 0 || col > n-1 || matrix[row][col] <= matrix[i][j]){
                continue;
            }

            maxLen = Math.max(1 + dfs(matrix, row, col), maxLen);
        }

        visited[i][j] = maxLen;

        return visited[i][j];
    }
}