/**
 * @see {@link https://leetcode.cn/problems/minimum-number-of-coins-to-be-added/description/?envType=daily-question&envId=2024-03-30}
 * @answer {@link https://www.bilibili.com/video/BV1og4y1Z7SZ/?vd_source=8d703991ee7a8cee61649894fc80f86e}
 */

/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
var minimumAddedCoins = function (coins, target) {
  /**
   * 首先对硬币数组排序，
   * 便于后续顺序枚举
   */
  const sortedCoins = [...coins].sort((a, b) => a - b);
  let result = 0;
  let currSum = 1; // 表示 [0, currSum - 1] 都可以被当前硬币的子序列表示
  let currIndex = 0;
  /**
   * 出口条件，currSum > target
   */
  while (currSum <= target) {
    /**
     * 如果新加入的元素小于 currSum，
     * 说明可以执行 [0, currSum - 1] 与 [coins[i], currSum - 1 + coins[i]] 的合并，
     * 合并结果为 [0, currSum - 1 + coins[i]]
     */
    if (currIndex < sortedCoins.length && sortedCoins[currIndex] <= currSum) {
      currSum += sortedCoins[currIndex];
      currIndex += 1;
    } else {
      /**
       * 否则说明区间无法合并，
       * 需要加入 coins[i] 这一个最贪心的元素进来执行最长的合并，
       * 把区间更新为 [0, 2 * currSum - 1]，
       * 之后再看更新后的区间是否满足合并要求
       */
      currSum = currSum * 2
      result += 1; // 更新计数
    }
  }

  return result;
};

minimumAddedCoins([1,4,10], 19)
