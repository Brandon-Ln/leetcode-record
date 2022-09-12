/**
 * @param {number[]} nums
 * @return {number}
 */
// n2
var specialArray = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const specialNum = i + 1;
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] >= specialNum) {
        count++;
      }
    }
    if (count === specialNum) {
      return specialNum;
    }
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  nums.sort((a, b) => a - b);
  for (let x = 0; x < 1001; x++) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] >= x) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    if (nums[left] >= x && x === nums.length - left) {
      return x;
    }
  }
  return -1;
};
