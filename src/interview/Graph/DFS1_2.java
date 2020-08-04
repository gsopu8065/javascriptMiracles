/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The cell itself does not count as an adjacent cell.
The same letter cell may be used more than once.

Given board =
[
  ["ABCE"],
  ["SFCS"],
  ["ADEE"]
]

word = "ABCCED", -> returns 1,
word = "SEE", -> returns 1,
word = "ABCB", -> returns 1,
word = "ABFSAB" -> returns 1
word = "ABCD" -> returns 0
 */

public class DFS1_2 {

    public boolean exist(char[][] board, String word) {
        for(int i=0; i<board.length; i++){
            for(int j=0; j<board[0].length; j++){
                if(dfs(board, word, i, j, 0)){
                    return true;
                }
            }
        }

        return false;
    }

    public boolean dfs(char[][] board, String word, int i, int j, int k){
        if(board[i][j]!=word.charAt(k)){
            return false;
        }

        if(k>=word.length()-1){
            return true;
        }

        int[] di={-1,0,1,0};
        int[] dj={0,1,0,-1};

        char t = board[i][j];
        board[i][j]='#';

        for(int m=0; m<4; m++){
            int pi=i+di[m];
            int pj=j+dj[m];
            if(pi>=0&&pi<board.length&&pj>=0&&pj<board[0].length&&board[pi][pj]==word.charAt(k+1)){
                if(dfs(board,word,pi,pj,k+1)){
                    return true;
                }
            }
        }

        board[i][j]=t;

        return false;
    }
}
