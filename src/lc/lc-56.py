from typing import List


class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        # 根据元组的首元素进行排序
        sortedIntervals = sorted(intervals, key=lambda a: a[0])
        res: List[List[int]] = [sortedIntervals[0]] # length > 0
        '''
        对排序数组进行遍历
        每当遍历到当前元素时
        判断一下末尾元素的右边界是否大于当前左边界
        如果大于，则需要进行合并：根据当前元素的右边界和末尾元素的右边界判断出口
        如果小于，则说明是新的区间，加入当前元素作为末尾区间
        '''
        for currList in sortedIntervals:
            if res[-1][1] < currList[0]:
                res.append(currList.copy())
            elif res[-1][1] < currList[1]:
                res[-1][1] = currList[1]
        return res
