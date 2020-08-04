import javafx.util.Pair;

import java.util.HashSet;
import java.util.PriorityQueue;
import java.util.Set;

//time complexity: O((|E|+|V|)log|V|)

public class Dijkstras {

    public static void dijstras(int[][] arr, int source){
        //step1: create distance array
        int[] dist = new int[arr.length];

        //Optional: keep the visited list to make it faster
        Set<Integer> visited = new HashSet<>();

        //step2: set infinity
        for(int i=0;i<dist.length;i++)
            dist[i] = Integer.MAX_VALUE;

        //step3: create a min heap, store node and weight
        PriorityQueue<int[]> queue = new PriorityQueue<>((a,  b) -> a[1] - b[1]);

        //step4: add source into queue
        queue.offer(new int[]{source, 0});
        dist[source] = 0;

        while(!queue.isEmpty()){
            int[] queuEle = queue.poll();
            int currNode = queuEle[0];
            int currNodeWeight = queuEle[1];

            if(!visited.contains(currNode)){ //optional
                visited.add(currNode); //optional

                for(int i=0;i<dist.length;i++){

                    if(!visited.contains(i)) { //optional

                        int newWeight = currNodeWeight + arr[currNode][i];
                        if (dist[i] > newWeight && arr[currNode][i] > 0) {
                            dist[i] = newWeight;
                            queue.offer(new int[]{i, newWeight});
                        }
                    }
                }
            }
        }

        //display result
        System.out.println("Distance of node from source "+source);
        for(int i=0;i<dist.length;i++){
            System.out.println(i+" ---> "+dist[i]);
        }


    }

    public static void main(String[] args) {
        int graph[][] = new int[][] {
                                    { 0, 4, 0, 0, 0, 0, 0, 8, 0 },
                                    { 4, 0, 8, 0, 0, 0, 0, 11, 0 },
                                    { 0, 8, 0, 7, 0, 4, 0, 0, 2 },
                                    { 0, 0, 7, 0, 9, 14, 0, 0, 0 },
                                    { 0, 0, 0, 9, 0, 10, 0, 0, 0 },
                                    { 0, 0, 4, 14, 10, 0, 2, 0, 0 },
                                    { 0, 0, 0, 0, 0, 2, 0, 1, 6 },
                                    { 8, 11, 0, 0, 0, 0, 1, 0, 7 },
                                    { 0, 0, 2, 0, 0, 0, 6, 7, 0 } };
        dijstras(graph, 0);
    }
}
