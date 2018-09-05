// Java program to find minimum breaks needed
// to break a string in dictionary words.
public class SampleTrie {

    TrieNode root = new TrieNode();
    // Trie node
    class TrieNode {
        boolean endOfTree;
        TrieNode children[] = new TrieNode[26];
        TrieNode(){
            endOfTree = false;
            for(int i=0;i<26;i++){
                children[i]=null;
            }
        }
    }

    // If not present, inserts a key into the trie
    // If the key is the prefix of trie node, just
    // marks leaf node
    void insert(String key){
        int length = key.length();

        int index;

        TrieNode pcrawl = root;

        for(int i = 0; i < length; i++)
        {
            index = key.charAt(i)- 'a';

            if(pcrawl.children[index] == null)
                pcrawl.children[index] = new TrieNode();

            pcrawl = pcrawl.children[index];
        }

        // mark last node as leaf
        pcrawl.endOfTree = true;

    }

    void display(){
        displayNode(root, "");
    }

    void displayNode(TrieNode node, String word){
        if(node.endOfTree){
            System.out.println(word);
        }

        for(int i=0; i < 26; i++) {
            if (node.children[i] != null) {
                displayNode(node.children[i], word + (char)(i + 'a'));
            }
        }
    }

    int findCharacter(TrieNode node, char keyChar){
        int index = keyChar - 'a';
        return node.children[index] != null? index : -1;
    }

    boolean findString(String key){

        //traverse
        char[] char1 = key.toCharArray();
        boolean res = true;
        TrieNode t = root;
        for(int i=0;i<char1.length;i++){
            int r = findCharacter(t, char1[i]);
            if(r == -1){
                return false;
            }
            else {
                t= t.children[r];
            }

        }

        return t.endOfTree;
    }



    // Driver code
    public static void main(String[] args)
    {
        String keys[] = {"cat", "mat", "ca", "ma",
                "at", "c", "dog", "og", "do" };

        SampleTrie trie = new SampleTrie();

        int i;
        for (i = 0; i < keys.length ; i++)
            trie.insert(keys[i]);

        trie.display();

        System.out.println(trie.findString("do"));

    }
}

// This code is contributed by Pavan Koli.