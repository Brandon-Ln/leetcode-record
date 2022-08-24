/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  const valueToIndexMap = new Map();
  let res = 0;
  /**
   * 线性扫描一遍数组，记录值到数组索引的哈希表
   * 因为是严格递增，所以 key 不会重复
   */
  for (let i = 0; i < arr.length; i++) {
    valueToIndexMap.set(arr[i], i);
  }
  /**
   * 初始化二维 dp 数组，dp[i][j] 表示末位为 i 和 j 加和的斐波那契数列的最长长度
   */
  const dp = new Array(arr.length)
    .fill(-1)
    .map(() => new Array(arr.length).fill(0));
  /**
   * 扫描数组，状态转移方程
   */
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      const preValue = arr[i] - arr[j];
      // preValue 需要比 arr[j] 要小
      if (preValue < arr[j] && valueToIndexMap.has(preValue)) {
        const prevIndex = valueToIndexMap.get(preValue);
        dp[i][j] = Math.max(3, dp[j][prevIndex] + 1);
      }
      res = Math.max(res, dp[i][j]);
    }
  }
  return res;
};

