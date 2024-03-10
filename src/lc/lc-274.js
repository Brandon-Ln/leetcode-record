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

/**
 * 排序法
 * @param {number[]} citations
 * @returns {number}
 */
var hIndex = function (citations) {
  /**
   * 先对原数组进行排序，
   * 排序后可以进行倒序遍历
   * 遍历保证了当 c[i] > h 时，
   * 说明至少找到了一篇引用数大于 h 的论文，
   * 所以可以让 h 自增
   */
  const sortedCitations = [...citations].sort((a, b) => a - b);

  let hIndex = 0;
  let currIndex = sortedCitations.length - 1;
  while (currIndex >= 0 && sortedCitations[currIndex] > hIndex) {
    hIndex++;
    currIndex--;
  }
  return hIndex;
};
