from typing import List

# https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        '''
        因为数组是有序的，所以可以尝试利用相向双指针算法的性质求解
        假设左右指针存在于数组的最两端，对指针当前所指的下标作和
        如果当前和太小了，可以移动左指针扩大和
        当前和太大了，则移动右指缩小和
        不断的移动左右指针至重合，得到最终相遇前的答案
        '''
        left = 0
        length = len(numbers)
        right = length - 1
        # 左右指针相遇时为终点，元组元素不允许指向同一个元素
        while left < right:
            currSum = sum([numbers[left], numbers[right]])
            if currSum > target:
                right -= 1
            elif currSum < target:
                left += 1
            else:
                # 题目使用的为自然索引，需要 +1
                return [left + 1, right + 1]
        return [None, None]
        