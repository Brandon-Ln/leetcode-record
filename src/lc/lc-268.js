/**
    原地哈希：
    正常的哈希表放置的应该是 [0 - n-1]
    所以如果遍历到 i 时，n[i] 不为 i，我们就把 n[i] 上的数字 x 换到 n[x] 上
    因为数字是不重复的，所以遍历完一遍能满足 [0 - n-1]
    这里可能会担心当出现 n 的时候怎么办，出现 n 我们不作交换，而是等待别的元素和 n 的位置做交换
    等到最后 n 所在的位置就是缺失的数字，反之就是 n 本身缺失了
     */

function missingNumber(nums) {
  const swap = (index1, index2) => {
    let temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
  };
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] < nums.length && nums[i] !== i) {
      swap(i, nums[i]);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
  return nums.length;
}

missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
