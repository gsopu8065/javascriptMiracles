public class DisjointSet {

    static class DSU {
        int[] parent;

        public DSU() {
            parent = new int[10001];
            for (int i = 0; i <= 10000; ++i)
                parent[i] = i;
        }

        public int find(int x) {
            if (parent[x] != x)
                parent[x] = find(parent[x]);
            return parent[x];
        }

        public void union(int x, int y) {
            parent[find(x)] = find(y);
        }
    }

    public static void main(String[] args) {
        DSU dsu =  new DSU();

        dsu.union(1,2);
        dsu.union(2,3);
        dsu.union(3,4);
        dsu.union(101, 102);
        dsu.union(101, 103);

        System.out.println("1 and 4 same group = "+(dsu.find(1) == dsu.find(4)));
        System.out.println("1 and 102 same group = "+(dsu.find(1) == dsu.find(102)));
        System.out.println("101 and 103 same group = "+(dsu.find(101) == dsu.find(103)));

    }
}
