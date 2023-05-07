from typing import List

# https://leetcode.cn/problems/find-peak-element/

class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        '''
        这道题目也是二分算法的典型例题，题目中数组内可能存在多个这样的 peak 元素
        但我们只需要返回一个即可求解，我们可以假设只存在一个这样的峰值元素
        因为 0 和 len - 1 肯定不是 peak 元素，因此我们可以使用左开右闭的区间进行搜索（题目要求数组边缘外为 -∞）
        我们定义 left 左侧为小于等于 peak，right 右侧为小于 peak
        '''
        lens = len(nums)
        left = 0
        right = lens - 1 # 注意！！！倒数第一个元素也可能是 peak
        # 当 (left, left] 时，right 元素即为搜索结果
        while left < right:
            mid = (left + right) // 2
            # 中间元素小于右侧元素时，说明 mid 元素肯定不是峰值元素，mid 肯定在峰顶的左侧
            if nums[mid] < nums[mid + 1]:
                left = mid + 1
            else:
                right = mid
        return right
    
Solution().findPeakElement([1,2,3,1])