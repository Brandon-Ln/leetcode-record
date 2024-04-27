// @ts-check

/**
 * @see {@link https://leetcode.cn/problems/find-the-width-of-columns-of-a-grid/description/?envType=daily-question&envId=2024-04-27}
 */

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function (grid) {
  /**
   * @type {number[]}
   */
  const res = new Array(grid[0].length).fill(0);
  /**
   * 计算字符位数
   * @param {number} num
   */
  const calculateNumLen = (num) => {
    let count = num < 0 ? 2 : 1;
    // 这里要使用绝对值，易错
    num = Math.abs(num);
    while (num >= 10) {
      num = Math.floor(num / 10);
      count++;
    }
    return count;
  };
  /**
   * 计算字符位数 2
   * @param {number} num
   */
  const calculateNumLen2 = (num) => {
    return num.toString().length;
  };
  /**
   * 以列为维度，
   * 遍历整个矩阵
   */
  for (let col = 0; col < grid[0].length; col++) {
    let maxLen = 0;
    for (let row = 0; row < grid.length; row++) {
      maxLen = Math.max(maxLen, calculateNumLen(grid[row][col]));
    }
    res[col] = maxLen;
  }

  return res;
};

findColumnWidth([[-93], [28], [23]]);
