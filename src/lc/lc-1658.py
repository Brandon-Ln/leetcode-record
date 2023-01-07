from typing import List


class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        # 初始化
        left = 0
        '''
        这里从逆向思维出发
        将题目转变成寻找到一个最长的子数组
        使得子数组的和为 sum(list) - x
        '''
        target = sum(nums) - x
        currSum = 0
        # 可以直接返回的边缘情况
        if target < 0:
            return -1
        if target == 0:
            return len(nums)
        lens = 0  # 子数组长度
        for index, num in enumerate(nums):
            currSum += num
            # 判断当前和是否大于 target，大于时左指针右移，这里需要做循环操作
            while currSum > target and left <= index:
                currSum -= nums[left]
                left += 1
            # 当前和等于 target 时，统计数组长度
            if currSum == target:
                lens = max(lens, index - left + 1)
        return -1 if lens == 0 else len(nums) - lens


s1 = Solution()
s1.minOperations([8828,9581,49,9818,9974,9869,9991,10000,10000,10000,9999,9993,9904,8819,1231,6309], 134365)
