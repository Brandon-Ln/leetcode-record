# https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/

from typing import List


class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        '''
        这道题目看到有序数组，反映来是一道经典的二分搜索算法题目
        要找出 target 元素的左右区间，可以想到分别使用两次二分搜索算法
        分别找到一个元素满足左边全部小于 target 和另一个元素的右边全部大于 target
        这里可以考虑使用左闭右闭区间进行搜索，即 left 和 right 均有可能是搜索元素的结果
        二分搜索的本质就是在不断的缩小搜索区间，直到搜索区间为空时，通过终止态的指针来返回答案
        '''
        def binarySearchLeft(leftIndex: int, rightIndex: int) -> int:
            '''
            设 left 表示当前位置左侧的索引均小于 target，right 表示右侧的所有索引均大于等于 target
            当 leftIndex == rightIndex，搜索区间内还有一个元素
            此时不能确定这剩余的一个元素是否满足条件，故结束状态为 left > rightIndex
            '''
            while leftIndex <= rightIndex:
                midIndex = (leftIndex + rightIndex) // 2
                if nums[midIndex] == target:
                    rightIndex = midIndex - 1
                elif nums[midIndex] > target:
                    rightIndex = midIndex - 1
                else:
                    leftIndex = midIndex + 1
            return leftIndex

        def binarySearchRight(leftIndex: int, rightIndex: int) -> int:
            '''
            这里处理和上述类似，不过 left 表示左侧的索引均小于等于 target，right 表示右侧的索引均大于 target
            '''
            while leftIndex <= rightIndex:
                midIndex = (leftIndex + rightIndex) // 2
                if nums[midIndex] == target:
                    leftIndex = midIndex + 1
                elif nums[midIndex] > target:
                    rightIndex = midIndex - 1
                else:
                    leftIndex = midIndex + 1
            return rightIndex
        lens = len(nums)
        leftBound = binarySearchLeft(0, lens - 1)
        # 边缘条件
        if leftBound == lens or nums[leftBound] != target:
            return [-1, -1]
        rightBound = binarySearchRight(0, lens - 1)
        return [leftBound, rightBound]
