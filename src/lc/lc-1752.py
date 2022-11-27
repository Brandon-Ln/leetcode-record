from typing import List


class Solution:
    def check(self, nums: List[int]) -> bool:
        increasingTrend = 0
        for i in range(1, len(nums)):
            # 递增趋势如果数量大于 2，则一定不能通过反转得到
            if increasingTrend > 1:
                return False
            elif nums[i] < nums[i - 1]:
                increasingTrend += 1
        '''
        需要满足第一个递增数组第一个值需要比第二个递增数组的末尾值大
        '''
        return increasingTrend == 0 or (nums[0] >= nums[-1] and increasingTrend == 1)
