/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  const n = matrix.length;
  /**
   * 找坐标关系
   * [0,0] -- [0, 2]
   * [0, 1] -- [1, 2]
   * [0,2] -- [2,2]
   * [1,0] -- [0, 1]
   * [1, 1] -- [1, 1]
   * [1, 2] -- [2, 1]
   * [2, 0] -- [0,0]
   * [2, 1] -- [1, 1]
   * [2, 2] -- [2, 0]
   */
  // 核心规律：第 i 行 的第 j 个元素，旋转后会跑到倒数第 i 列的第 j 个元素
  // 行为偶数的时候多了一个小正方形
  for (let i = 0; i < Math.floor(n / 2); i++) {
    // 列的话只要转超过一半即可
    for (let j = 0; j < Math.ceil(n / 2); j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
      matrix[j][n - 1 - i] = temp;
    }
  }
};

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
