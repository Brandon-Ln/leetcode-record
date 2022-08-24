/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  const countMap = new Map();
  for (let i = 0; i < target.length; i++) {
    const currCount = countMap.get(target[i]) || 0;
    countMap.set(target[i], currCount + 1);
  }
  for (let i = 0; i < arr.length; i++) {
    /**
     * 不存在对应元素时直接返回
     */
    if (!countMap.has(arr[i])) {
      return false;
    }
    const currCount = countMap.get(arr[i]);
    countMap.set(arr[i], currCount - 1);
  }
  return Array.from(countMap.values()).every((count) => count === 0);
};
