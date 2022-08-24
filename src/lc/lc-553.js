/**
 * @param {number[]} nums
 * @return {string}
 */
const optimalDivision = function (nums) {
  if (nums.length < 2) {
    return nums.join("");
  }
  const less = nums.filter((_, index) => index !== 0).join("/");
  return `${nums[0]}/(${less})`;
};
