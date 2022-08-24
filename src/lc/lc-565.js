/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayNesting = function (nums) {
  function DFS(index) {
    if(nums[index] === -1){
        return 0
    }
    const next = nums[index]
    nums[index] = -1
    return 1 + DFS(next);
  }
  return Math.max(...nums.map((_, index) => DFS(index)))
};

arrayNesting([5, 4, 0, 3, 1, 6, 2]);
