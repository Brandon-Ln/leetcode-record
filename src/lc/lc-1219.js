/**
 * @param {number[][]} grid
 * @return {number}
 */
const getMaximumGold = function (grid) {
  let maxPrice = 0;
  const row = grid.length;
  const col = grid[0].length;
  const directives = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  // 深度优先遍历的方法
  const DFS = (currGold, currRow, currCol) => {
    // edge check
    if (currRow < 0 || currRow === row || currCol < 0 || currCol === col) {
      return currGold;
    }
    // '0' check
    if (grid[currRow][currCol] === 0) {
      return currGold;
    }
    const memoGold = grid[currRow][currCol]
    const gold = memoGold + currGold;
    // path visited
    grid[currRow][currCol] = 0;
    const posibilities = [];
    for (let i = 0; i < directives.length; i++) {
      posibilities.push(
        DFS(gold, currRow + directives[i][0], currCol + directives[i][1])
      );
    }
    // restore path
    grid[currRow][currCol] = memoGold;
    return Math.max(...posibilities);
  };
  // iterate grid, find origin point
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] !== 0) {
        maxPrice = Math.max(maxPrice, DFS(0, i, j));
      }
    }
  }
  return maxPrice;
};

getMaximumGold([
  [0, 6, 0],
  [5, 8, 7],
  [0, 9, 0],
]);
