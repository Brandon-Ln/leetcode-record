from typing import List

'''
@link https://leetcode.cn/problems/jump-game/solution/55-by-ikaruga/
'''
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        currMaxIndex = 0 # 维护当前能跳到的最远的索引
        maxLen = len(nums)
        for i in range(maxLen):
            currMaxIndex = max(currMaxIndex, i + nums[i])
            # 如果当前最大索引大于可以跳的最远索引，返回 True
            if currMaxIndex + 1 >= maxLen:
                return True
            # 如果当前最大索引与当前索引相同，说明跳不动了，返回 false
            elif currMaxIndex == i:
                return False
            
        return True