from typing import List

# https://leetcode.cn/problems/trapping-rain-water/
class Solution:
    def trap(self, height: List[int]) -> int:
        '''
        分析：
        首先分析什么情况下能形成可以接雨水的坑
        形成坑需要当前位置的两侧存在柱子（不计算坐标轴）
        那怎样通过柱子的高度计算出当前能装多少水？
        装水的容量为当前单元左右最大柱子边缘高度的最小值（木桶理论）- 当前的柱子高度
        根据常识可知，不存在当前柱子高度大于左右最大柱子高度的情况，
        在遍历柱子高度时，当前柱子的高度数值是很好得到的
        所以求解关键在于得到当前位置的左右最大柱子高度
        这里计算左右的前缀和数组是可以求解的
        使用双指针相向算法结合维护左右前缀和变量来进行求解
        '''
        length = len(height)
        left = 0
        right = length - 1
        preSum = 0
        revSum = 0
        res = 0
        # left 与 right 实际上指的是柱子的边缘，所以这里可以相等
        while left <= right:
            leftHight = height[left]
            rightHeight = height[right]
            preSum = max(leftHight, preSum)
            revSum = max(rightHeight, revSum)
            # 如果当前柱子的高度等于前缀和，说明当前位置是个隆起，肯定形成不了坑
            if leftHight == preSum:
                left += 1
                continue
            if rightHeight == revSum:
                right -= 1
                continue
            # 走到这里说明当前位置形成了坑，开始计算水坑的面积
            if preSum < revSum:
                res += preSum - leftHight
                left += 1
            else:
                res += revSum - rightHeight
                right -= 1
        return res