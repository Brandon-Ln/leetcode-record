/**
 * @param {string} s
 * @return {number}
 */
const minFlipsMonoIncr = function (s) {
  /**
   * dp 值代表了上一个索引所需的最小反转次数
   */
  let dp = 0;
  let oneCount = 0;
  for (let i = 0; i < s.length; i++) {
    /**
     * 如果出现 0 的场景
     * 此时有两种选择：
     * 1、翻转当前值
     * 2、翻转之前所有的 1
     */
    if (s[i] === "0") {
      isRising = false;
      dp = Math.min(dp + 1, oneCount);
      /**
       * 如果当前值是 1，则不影响反转次数
       */
    } else if (s[i] === "1") {
      oneCount++;
    }
  }
  return dp;
};

minFlipsMonoIncr("00011000");
