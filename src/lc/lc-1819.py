from math import gcd
from typing import List

class Solution:
    def countDifferentSubsequenceGCDs(self, nums: List[int]) -> int:
        '''
        这是一道数学题，因为最大公约数的倍数会在 nums 中
        所以理论上只需要枚举 1- max（nums）中的数据范围即可
        '''
        count = 0
        maxNum = max(nums)
        scope = [False] * (maxNum + 1)
        for num in nums:
            scope[num] = True
        # base 是底数
        for base in range(1, maxNum + 1):
            # currGcd 是当前的最大公约数
            currGcd = 0
            # times 是底数的倍数
            for times in range(base, maxNum + 1, base):
                # 如果当前倍数存在与 nums 中，证明 base 是一个约数
                if scope[times]:
                    currNum = times
                    currGcd = gcd(currNum, currGcd)
                # 如果当前的最大公约数即为底数，说明此时底数就是最大公约数
                if currGcd == base:
                    count += 1
                    # 不用再接着循环和 base 有关的倍数
                    break
        return count
    