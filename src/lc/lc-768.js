/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  const sortedArr = [...arr].sort((a, b) => a - b);
  let count = 0;
  const countMap = new Map();
  let category = 0;
  for (let i = 0; i < arr.length; i++) {
    const currUnOrderedCount = countMap.get(arr[i]) || 0;
    countMap.set(arr[i], currUnOrderedCount + 1);
    if (countMap.get(arr[i]) === 1) {
      category++;
    }
    const currOrderedCount = countMap.get(sortedArr[i]) || 0;
    countMap.set(sortedArr[i], currOrderedCount - 1);
    if (countMap.get(sortedArr[i]) === 0) {
      category--;
    }
    if (category === 0) {
      count++;
    }
  }
  return count;
};

maxChunksToSorted([5, 4, 3, 2, 1]);
