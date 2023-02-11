from typing import List


class Solution:
    def fillCups(self, amount: List[int]) -> int:
        '''
        使用贪心算法求解
        先找到当前杯数最多的，和杯数第二多的，两者同减
        减到其中两者只剩 0 时，加上剩余的杯数
        '''
        times = 0
        amount.sort()
        while amount[2] != 0:
            times += 1
            amount[2] -= 1
            amount[1] -= 1
            amount.sort()
            # 剪枝操作
            if amount[0] == 0 and amount[1] == 0:
                return times + amount[2]
        return times
