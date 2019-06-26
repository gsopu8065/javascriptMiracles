package Facebook;

public class MatrixSqureOne {
}

/*
// A brute force approach based CPP program to
// find if there is a rectangle with 1 as corners.
#include <bits/stdc++.h>
using namespace std;

// Returns true if there is a rectangle with
// 1 as corners.
bool isRectangle(const vector<vector<int> >& m)
{
    // finding row and column size
    int rows = m.size();
    if (rows == 0)
        return false;
    int columns = m[0].size();

    // scanning the matrix
    for (int y1 = 0; y1 < rows; y1++)
      for (int x1 = 0; x1 < columns; x1++)

        // if any index found 1 then try
        // for all rectangles
        if (m[y1][x1] == 1)
          for (int y2 = y1 + 1; y2 < rows; y2++)
            for (int x2 = x1 + 1; x2 < columns; x2++)
               if (m[y1][x2] == 1 &&
                   m[y2][x1] == 1 &&
                     m[y2][x2] == 1)
                            return true;
    return false;
}

// Driver code
int main()
{
    vector<vector<int> > mat = { { 1, 0, 0, 1, 0 },
                                 { 0, 0, 1, 0, 1 },
                                 { 0, 0, 0, 1, 0 },
                                 { 1, 0, 1, 0, 1 } };
    if (isRectangle(mat))
        cout << "Yes";
    else
        cout << "No";
}
 */