/**
 * @see {@link https://leetcode.cn/problems/coin-change/description/?envType=daily-question&envId=2024-03-24}
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  /**
   * 对硬币进行排序，
   * 使得后续计算状态转移方程时，
   * 硬币值可以从大往小递推
   */
  coins.sort((a, b) => a - b);
  /**
   * dp[i] 代表当前凑成总金额 i 所需的最少的硬币个数
   * @type {number[]}
   */
  const dp = new Array(amount + 1).fill(-1);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    /**
     * 当前的最小硬币数为
     * dp[i] - (Max -> Min)coins[i]
     */
    for (let j = coins.length - 1; j >= 0; j--) {
      const currCoin = coins[j];
      if (i - currCoin < 0 || dp[i - currCoin] === -1) {
        continue;
      } else if (dp[i - currCoin] != -1) {
        // dp[i] 如果未赋值过就使用 Infinity 来比较
        dp[i] = Math.min(dp[i - currCoin] + 1, dp[i] === -1 ? Infinity : dp[i]);
      }
    }
  }

  return dp[amount];
};

coinChange([1, 2, 5], 11);
