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
/*let path = [
    [1, 1, 0],
    [1, 0, 0],
    [1, 9, 0]];
findPath(path, 3, 3);

path = [[1, 0],[1, 9]];
findPath(path, 2, 2);*/

path = [
  [1,0,1,1,1],
  [1,1,1,0,1],
  [0,0,0,0,1],
  [9,1,1,1,1]
];
findPath(path, 4, 5);

/*
path = [
    [1,1,0,0],
    [1,1,0,0],
    [0,1,9,0]
];
findPath(path,3,4);*/


/*
python
all_routes = []

def calc_prime_truck_route(rows, cols, grid):
    def crawl_all_paths(i, j, route):
        if grid[i][j] == 9:
            all_routes.append(route)
            return
        else:
            if i+1<rows and (grid[i+1][j] == 1 or grid[i+1][j] ==9):
                new_route = route.copy()
                new_route.append((i + 1, j))
                crawl_all_paths(i+1, j, new_route)
                return
            if i-1<=0 and (grid[i-1][j] == 1 or grid[i-1][j] ==9):
                new_route = route.copy()
                new_route.append((i - 1, j))
                crawl_all_paths(i-1, j, new_route)
                return
            if j+1<cols and (grid[i][j+1] == 1 or grid[i][j+1] ==9):
                new_route = route.copy()
                new_route.append((i, j + 1))
                crawl_all_paths(i, j+1, new_route)
                return
            if j-1<=0 and (grid[i][j-1] == 1 or grid[i][j-1] ==9):
                new_route = route.copy()
                new_route.append((i, j - 1))
                crawl_all_paths(i, j-1, new_route)
                return
    crawl_all_paths(0, 0, [(0,0)])
    route_lens = [len(route) for route in all_routes]
    return min(route_lens)-1


path = [
 [1,1,1,1],
 [0,1,1,1],
 [0,1,0,1],
 [1,1,9,1],
 [0,0,1,1]
];
print(calc_prime_truck_route(5,4,path))
 */