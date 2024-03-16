/**
 * @see {@link https://leetcode.cn/problems/maximum-number-of-moves-in-a-grid/?envType=daily-question&envId=2024-03-16}
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function (grid) {
  /**
   * 这道题可以使用动态规划算法求解，
   * 在每个单元格中，可以往右上、右、右下走，
   * 如果能求解出每个矩阵格中最大的移动次数，
   * 那么答案就是第一列中的最大值
   */
  const row = grid.length;
  const col = grid[0].length;
  /**
   * 动态规划的子问题是，
   * 如果已知道右上、右、右下单元格的最大移动次数，
   * 那当前单元格的最大移动次数就是这三个方向的最大值 + 1
   */
  /**
   * @type {number[][]}
   * 此处状态数组可以进行压缩
   */
  const dpGrid = new Array(row).fill(0).map(() => new Array(col).fill(0));
  /**
   * 从矩阵列向的倒序开始推,
   * 最右向即为初始状态，因为最后一列的元素无法再向右移动，故步数是 0
   */
  for (let currC = col - 2; currC >= 0; currC--) {
    for (let currR = 0; currR < row; currR++) {
      let currDp = 0;
      const currCell = grid[currR][currC];
      /**
       * 如果右上的元素边界合法、大于当前网格值且大于等于当前 dp 值，
       * 则更新当前 dp 值
       */
      if (
        currR - 1 >= 0 &&
        grid[currR - 1][currC + 1] > currCell &&
        dpGrid[currR - 1][currC + 1] >= currDp
      ) {
        currDp = dpGrid[currR - 1][currC + 1] + 1;
      }
      /**
       * 如果右侧元素大于当前网格值且大于等于当前 dp 值，
       * 则更新当前 dp 值
       */
      if (
        grid[currR][currC + 1] > currCell &&
        dpGrid[currR][currC + 1] >= currDp
      ) {
        currDp = dpGrid[currR][currC + 1] + 1;
      }
      /**
       * 如果右下的元素边界合法、大于当前网格值且大于等于当前 dp 值，
       * 则更新当前 dp 值
       */
      if (
        currR + 1 < row &&
        grid[currR + 1][currC + 1] > currCell &&
        dpGrid[currR + 1][currC + 1] >= currDp
      ) {
        currDp = dpGrid[currR + 1][currC + 1] + 1;
      }
      dpGrid[currR][currC] = currDp;
    }
  }
  /**
   * 求第一列的最大值
   */
  let ret = 0;
  for (let i = 0; i < row; i++) {
    ret = Math.max(dpGrid[i][0], ret);
  }
  return ret;
};

maxMoves([
  [131, 1, 95, 208, 38, 257, 123, 204, 101],
  [185, 165, 292, 109, 266, 259, 97, 234, 60],
  [55, 281, 38, 61, 204, 243, 32, 54, 164],
  [106, 230, 202, 4, 65, 243, 89, 139, 211],
  [192, 246, 11, 294, 119, 43, 250, 161, 110],
  [71, 279, 288, 173, 64, 48, 216, 26, 276],
  [23, 206, 152, 106, 288, 286, 270, 131, 12],
  [115, 64, 251, 108, 194, 295, 131, 249, 121],
]);
