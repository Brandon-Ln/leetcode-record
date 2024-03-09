/**
 * @see {@link https://leetcode.cn/problems/h-index/description/?envType=study-plan-v2&envId=top-interview-150}
 */

/**
 * 破解法
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  for (let i = citations.length; i > 0; i--) {
    const currHIndex = i;
    let currUpperCount = 0;
    for (let i = 0; i < citations.length; i++) {
      if (citations[i] >= currHIndex) {
        currUpperCount++;
      }
    }
    if (currUpperCount >= currHIndex) {
      return currHIndex;
    }
  }
  return 0;
};
