//@ts-check

/**
 * @see {@link https://leetcode.cn/problems/grumpy-bookstore-owner/description/?envType=daily-question&envId=2024-04-23}
 */

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
  /**
   * 我们看到在第 i 分钟内，假设老板第 i 分钟不生气，
   * 那么第 i 分钟满意的客人很好计算，就是 customer[i]。
   * 我们要求最多有多少客户能够感到满意，
   * 而老板的能力又是让自己连续 minutes 分钟不生气，
   * 这个连续可以想到使用滑动弹窗算法求解
   */
  let resultWithNoAbility = 0;
  for (let i = 0; i < customers.length; i++) {
    resultWithNoAbility += grumpy[i] ? 0 : customers[i];
  }

  let left = 0;
  let right = minutes; // 区间左闭右开
  /**
   * 初始化老板能力计数
   */
  let maxAbilityCount = 0;
  for (let i = 0; i < minutes; i++) {
    if (grumpy[i]) {
      maxAbilityCount += customers[i];
    }
  }
  let currAbilityCount = maxAbilityCount;

  while (right < customers.length) {
    /**
     * 对于右指针，如果老板生气就加，老板不生气什么都不做
     * 对于左指针，如果老板生气就减，老板不生气就什么都不做
     */
    if (grumpy[right]) {
      currAbilityCount += customers[right];
    }
    if (grumpy[left]) {
      currAbilityCount -= customers[left];
    }
    maxAbilityCount = Math.max(currAbilityCount, maxAbilityCount);
    left++;
    right++;
  }

  return resultWithNoAbility + maxAbilityCount;
};

maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3);
