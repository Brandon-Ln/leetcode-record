/**
 * 如果负数的个数大于等于 k 的个数，选最小的翻转即可
 * 如果负数的个数小于 k 的个数：
 * k 的剩余次数为偶数，那直接翻转两次正数即可
 * k 剩余的次数为奇数，比较最大的负数和最小的正数，反转最小的正数为负数 or 保留最小的正数并留最小的负数
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const largestSumAfterKNegations = function (nums, k) {
  // 只跟小的数字有关
  // 先求解当前的和并对负数计数，判断是否有出现 0，还需要找到绝对值最小的数字
  let minCount = 0;
  let minAbsNumIndex = 0;
  let hasZero = false;
  let originSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) minCount++;
    if (nums[i] === 0) hasZero = true;
    if (Math.abs(nums[i]) < Math.abs(nums[minAbsNumIndex])) minAbsNumIndex = index;
    originSum += nums[i];
  }
  // 对原数组排序
  const orderedNums = [...nums].sort((a, b) => a - b);
  let currSum = originSum;
  // 如果 k 小于 minusCount
  if (k <= minCount) {
    for (let i = 0; i < k; i++) {
      currSum -= 2 * orderedNums[i];
    }
    return currSum;
  } else {
    // 一定要有自然数反转
    for (let i = 0; i < minCount; i++) {
      currSum -= 2 * orderedNums[i];
    }
    // 如果有 0 或者剩余的 k 为偶数那最轻松，直接返回
    if (hasZero || (k - minCount) % 2 === 0) {
      return currSum;
    } else {
      return currSum - 2 * Math.abs(nums[minAbsNumIndex]);
    }
  }
};

largestSumAfterKNegations([-2, 5, 0, 2, -2], 3);
