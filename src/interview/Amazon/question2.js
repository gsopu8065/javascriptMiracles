function findPath(path, numRows, numCols) {

    console.log("Moves ="+processEachCell(0,0,path,numRows, numCols,0))
}

function processEachCell(i,j,path, numRows, numCols, moves){
    let top = (i!==0)?path[i-1][j]:0;
    let bottom = (i<numRows-1)?path[i+1][j]:0;

    let left = (j!==0)?path[i][j-1]:0;
    let right = (j<numCols-1)?path[i][j+1]:0;

    if(path[i][j] === 9|| path[i][j]===0|| !path[i][j])
        return moves;
    else if(left===9||right===9||top===9||bottom===9)
        return moves+1;

    path[i][j] = 0; //mark it visited
    if(right===1)
        return processEachCell(i,j+1,path, numRows, numCols, moves+1);
    else if(bottom===1)
        return processEachCell(i+1,j,path, numRows, numCols, moves+1);
    else if(left===1)
        return processEachCell(i,j-1,path, numRows, numCols, moves+1);
    else if(top===1)
        return processEachCell(i-1,j,path, numRows, numCols, moves+1);

    return 0;
}

/*
[1 0 0]
[1 0 0]
[1 9 0]
 */
let path = [[1, 0, 0],[1, 0, 0],[1, 9, 0]];
findPath(path, 3, 3);

path = [[1, 0],[1, 9]];
findPath(path, 2, 2);

path = [
  [1,0,1,1,1],
  [1,1,1,0,1],
  [0,0,0,0,1],
  [9,1,1,1,1]
];
findPath(path, 4, 5);