from typing import List


class Solution:
    def getMaximumConsecutive(self, coins: List[int]) -> int:
        count = 0
        '''
        有序是一个强大的性质，
        如果对数组排序不影响答案的话，
        可以尝试将数组排序后，再重新思考，看看能否发现新的思路。
        这道是个数学题，不好想
        '''
        coins.sort()
        # link: https://leetcode.cn/problems/maximum-number-of-consecutive-values-you-can-make/solution/mei-xiang-ming-bai-yi-zhang-tu-miao-dong-7xlx/
        for coinMayInBound in coins:
            if coinMayInBound > count + 1:
                break
            count += coinMayInBound
        return count + 1
