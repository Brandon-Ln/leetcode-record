/**
 * @param {number[][]} grid
 * @return {number}
 */
const numEnclaves = function (grid) {
  const directives = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let count = 0;
  const rowLen = grid.length;
  const colLen = grid[0].length;
  const DFS = (currRow, currCol) => {
    // edge check
    if (
      currRow < 0 ||
      currCol < 0 ||
      currRow === rowLen ||
      currCol === colLen
    ) {
      return;
    }
    // category check
    if (grid[currRow][currCol] === 0) {
      return;
    } else {
      // transform land
      grid[currRow][currCol] = 0;
    }
    for (const directive of directives) {
      DFS(currRow + directive[0], currCol + directive[1]);
    }
  };
  // first row & last row
  for (let i = 0; i < colLen; i++) {
    if (grid[0][i] === 1) {
      DFS(0, i);
    }
    if (grid[colLen - 1][i] === 1) {
      DFS(colLen - 1, i);
    }
  }
  // first col & last col
  for (let i = 0; i < rowLen; i++) {
    if (grid[i][0] === 1) {
      DFS(i, 0);
    }
    if (grid[i][rowLen - 1] === 1) {
      DFS(i, rowLen - 1);
    }
  }
  // iterate & statistics 1
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (grid[i][j] === 1) count++;
    }
  }
  return count;
};

numEnclaves([
  [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
  [1, 1, 0, 0, 0, 1, 0, 1, 1, 1],
  [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
  [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
  [0, 0, 1, 0, 1, 1, 1, 1, 0, 1],
  [0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
  [0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
]);
