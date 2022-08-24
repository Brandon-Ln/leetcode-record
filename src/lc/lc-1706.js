/**
 * @param {number[][]} grid
 * @return {number[]}
 */
const findBall = function (grid) {
  const res = []; // result
  const DFS = (startRow, startCol) => {
    // access to the end
    if (startRow === grid.length) {
      res.push(startCol);
      return;
    }
    // out of the edge
    if (
      startRow < 0 ||
      startRow >= grid.length ||
      startCol < 0 ||
      startCol >= grid[0].length
    ) {
      res.push(-1);
      return;
    }
    const besidesCol =
      grid[startRow][startCol] === 1 ? startCol + 1 : startCol - 1;
    // meet the corner
    if (grid[startRow][besidesCol] !== grid[startRow][startCol]) {
      res.push(-1);
      return;
    }
    // row to the nextline
    DFS(startRow + 1, besidesCol);
  };
  for (let i = 0; i < grid[0].length; i++) {
    // 第一行的起点
    DFS(0, i);
  }
  return res;
};
