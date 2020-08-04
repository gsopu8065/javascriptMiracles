import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

// Java program to demonstrate insert operation in binary search tree
public class BinarySearchTree {

    static class INT
    {
        int v;
        INT(int a)
        {
            v = a;
        }
    }

    /* Class containing left and right child of current node and key value*/
    class Node {
        int key;
        Node left, right;

        public Node(int item) {
            key = item;
            left = right = null;
        }
    }

    // Root of BST
    Node root;

    // Constructor
    BinarySearchTree() {
        root = null;
    }

    // This method mainly calls insertRec()
    void insert(int key) {
        root = insertRec(root, key);
    }

    /* A recursive function to insert a new key in BST */
    Node insertRec(Node root, int key) {

        /* If the tree is empty, return a new node */
        if (root == null) {
            root = new Node(key);
            return root;
        }

        /* Otherwise, recur down the tree */
        if (key < root.key)
            root.left = insertRec(root.left, key);
        else if (key > root.key)
            root.right = insertRec(root.right, key);

        /* return the (unchanged) node pointer */
        return root;
    }
    int height(){
        return heightNode(root);
    }

    int heightNode(Node node)
    {
        /* base case tree is empty */
        if (node == null)
            return 0;

        /* If tree is not empty then height = 1 + max of left
           height and right heights */
        return (1 + Math.max(heightNode(node.left), heightNode(node.right)));
    }

    public List<Integer> bfsRoot(){
        List<Node> res = new ArrayList<Node>();
        res.add(this.root);
        return bfs(res);
    }

    List<Integer> bfsRes = new ArrayList<Integer>();
    List<Integer> bfs(List<Node> nodes){

        List<Node> res = new ArrayList<Node>();
        for(int i=0;i<nodes.size();i++){
            Node temp = nodes.get(i);
            bfsRes.add(temp.key);

            if (temp.left != null) {
                res.add(temp.left);
            }

            /*Enqueue right child */
            if (temp.right != null) {
                res.add(temp.right);
            }
        }

        if(res.size() > 0)
            bfs(res);

        return bfsRes;
    }



    // This method mainly calls InorderRec()
    void inorder()  {
        inorderRec(root);
    }

    // A utility function to do inorder traversal of BST
    void inorderRec(Node root) {
        if (root != null) {
            inorderRec(root.left);
            System.out.print(root.key+" ");
            inorderRec(root.right);
        }
    }

    int diameter(Node root)
    {
        /* base case if tree is empty */
        if (root == null)
            return 0;

        /* get the height of left and right sub trees */
        int lheight = heightNode(root.left);
        int rheight = heightNode(root.right);

        /* get the diameter of left and right subtrees */
        int ldiameter = diameter(root.left);
        int rdiameter = diameter(root.right);

        /* Return max of following three
          1) Diameter of left subtree
         2) Diameter of right subtree
         3) Height of left subtree + height of right subtree + 1 */
        return Math.max(lheight + rheight + 1,
                Math.max(ldiameter, rdiameter));

    }

    /* A wrapper over diameter(Node root) */
    int diameter()
    {
        return diameter(root);
    }


    boolean isBST()  {
        return isBSTUtil(root, Integer.MIN_VALUE,
                Integer.MAX_VALUE);
    }

    /* Returns true if the given tree is a BST and its
      values are >= min and <= max. */
    boolean isBSTUtil(Node node, int min, int max)
    {
        /* an empty tree is BST */
        if (node == null)
            return true;

        /* false if this node violates the min/max constraints */
        if (node.key < min || node.key > max)
            return false;

        /* otherwise check the subtrees recursively
        tightening the min/max constraints */
        // Allow only distinct values
        return (isBSTUtil(node.left, min, node.key-1) &&
                isBSTUtil(node.right, node.key+1, max));
    }


    Node findLCA(int n1, int n2)
    {
        return findLCA(root, n1, n2);
    }

    // This function returns pointer to LCA of two given
    // values n1 and n2. This function assumes that n1 and
    // n2 are present in Binary Tree
    Node findLCA(Node node, int n1, int n2)
    {
        // Base case
        if (node == null)
            return null;

        // If either n1 or n2 matches with root's key, report
        // the presence by returning root (Note that if a key is
        // ancestor of other, then the ancestor key becomes LCA
        if (node.key == n1 || node.key == n2)
            return node;

        // Look for keys in left and right subtrees
        Node left_lca = findLCA(node.left, n1, n2);
        Node right_lca = findLCA(node.right, n1, n2);

        // If both of the above calls return Non-NULL, then one key
        // is present in once subtree and other is present in other,
        // So this node is the LCA
        if (left_lca!=null && right_lca!=null)
            return node;

        // Otherwise check if left subtree or right subtree is LCA
        return (left_lca != null) ? left_lca : right_lca;
    }


    /*Remove all nodes which don’t lie in any path with sum>= k */
    static Node pruneUtil(Node root, int k,
                          INT sum)
    {
        // Base Case
        if (root == null) return null;

        // Initialize left and right
        // sums as sum from root to
        // this node (including this node)
        INT lsum = new INT(sum.v + (root.key));
        INT rsum = new INT(lsum.v);

        // Recursively prune left
        // and right subtrees
        root.left = pruneUtil(root.left, k, lsum);
        root.right = pruneUtil(root.right, k, rsum);

        // Get the maximum of
        // left and right sums
        sum.v = Math.max(lsum.v, rsum.v);

        // If maximum is smaller
        // than k, then this node
        // must be deleted
        if (sum.v < k)
        {

            root = null;
        }

        return root;
    }

    // A wrapper over pruneUtil()
    static Node prune(Node root, int k)
    {
        INT sum = new INT(0);
        return pruneUtil(root, k, sum);
    }


    /* Remove nodes on root to leaf paths of length < K */
    static Node removeShortPathNodesUtil(Node node, int level, int k)
    {
        //Base condition
        if (node == null)
            return null;

        node.left = removeShortPathNodesUtil(node.left, level + 1, k);
        node.right = removeShortPathNodesUtil(node.right, level + 1, k);


        if (node.left == null && node.right == null && level < k)
            return null;

        return node;
    }

    // Method which calls the utitlity method to remove the short path
    // nodes.
    static Node removeShortPathNodes(Node node, int k)
    {
        return removeShortPathNodesUtil(node, 1, k);
    }

    // Driver Program1 to test above functions
    public static void main(String[] args) {
        BinarySearchTree tree = new BinarySearchTree();

        /* Let us create following BST
              50
           /     \
          30      70
         /  \    /  \
       20   40  60   80
                      \
                      100
                       \
                       120
                             */
        tree.insert(50);
        tree.insert(30);
        tree.insert(20);
        tree.insert(40);
        tree.insert(70);
        tree.insert(60);
        tree.insert(80);
        tree.insert(100);
        tree.insert(120);

        // print inorder traversal of the BST
        tree.inorder();

        System.out.println("\n BFS = "+ tree.bfsRoot());

        System.out.println("\n Height:"+tree.height());
        System.out.println("Diameter:"+tree.diameter());
        System.out.println("is BST:"+tree.isBST());
        System.out.println("LCA od 30 and 80:"+tree.findLCA(30, 80).key);

        Node pruneTree = prune(tree.root, 200);
        tree.inorderRec(pruneTree);

        System.out.println("\n");
        Node shortPathRemoved = removeShortPathNodes(tree.root, 6);
        tree.inorderRec(shortPathRemoved);
    }
}