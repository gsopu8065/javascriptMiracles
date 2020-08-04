// A Java Program1 to detect cycle in an undirected graph
import java.util.*;

// This class represents a directed graph using adjacency list
// representation
public class DFS2 {

    //red = not processed, blue is inprogress, green is done;
    int RED = 0, BLUE = 1, GREEN = 2;

    LinkedList<Integer>[] g;
    public int solve(int A, int[][] B) {

        //step1: define graph
        g = new LinkedList[A];
        for(int i=0;i<A;i++){
            g[i] = new LinkedList<>();
        }

        //step2: assign all nodes
        for(int i=0;i<B.length;i++){
            g[B[i][0]-1].add(B[i][1]-1);
        }

        //step3: create a visited array to track
        int[] visited = new int[A];
        for(int i=0;i<A;i++){
            visited[i] = RED;
        }


        //step4: traverse through the graph
        for(int i=0;i<g.length;i++){
            if(visited[i] == RED){
                if(isCycle(g, visited, i)){
                    return 1;
                }
            }
        }

        return 0;
    }

    public boolean isCycle(LinkedList<Integer>[] g, int[] visited,int i){
        //change visited to inprogress
        visited[i] = BLUE;

        //search for all childrens
        for(Integer child: g[i]){
            //if child is in progress, there is a cycle
            if(visited[child] == BLUE){
                return true;
            }

            if(visited[child] == RED && isCycle(g, visited, child)){
                return true;
            }
        }

        //mark visited as done
        visited[i] = GREEN;
        return false;
    }
}