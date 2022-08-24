/**
 * @param {number[]} arr
 * @return {number[]}
 */
const pancakeSort = function (arr) {
  const flips = [];
  // sort effect
  const pancakeFlip = (currMaxIndex, lastIndex) => {
    let left = 0;
    let right = currMaxIndex;
    // two point flip
    flips.push(currMaxIndex + 1);
    while (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
    // whole arrary flip
    flips.push(lastIndex + 1);
    left = 0;
    right = lastIndex;
    while (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  };
  for (let i = 0; i < arr.length; i++) {
    let currMaxIndex = 0;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[currMaxIndex]) {
        currMaxIndex = j;
      }
    }
    // 此时已经找到了当前有序数组中最大的元素，把它通过煎饼排序调整到当前数组的末尾
    pancakeFlip(currMaxIndex, arr.length - i - 1);
  }
  return flips;
};

pancakeSort([3, 2, 4, 1]);
