"""
   This is the custom function interface.
   You should not implement it, or speculate about its implementation
   class CustomFunction:
       # Returns f(x, y) for any given positive integers x and y.
       # Note that f(x, y) is increasing with respect to both x and y.
       # i.e. f(x, y) < f(x + 1, y), f(x, y) < f(x, y + 1)
       def f(self, x, y):
  
"""

from bisect import bisect_left
from typing import List


class Solution:
    def findSolution(self, customfunction: 'CustomFunction', z: int) -> List[List[int]]:
        res = []
        # 尝试使用二分查找来优化搜索速度
        for x in range(1, 1001):
            # 二分查找这里找到的是对应插入元素左边的位置，要对应 [1, 1000]
            # 因为这里返回二分搜索返回的是数组的下标，所以值对应 [0, 999]
            insertY = bisect_left(
                range(1, 1000), z, key=lambda y: customfunction.f(x, y)) + 1
            if customfunction.f(x, insertY) == z:
                res.append([x, insertY])
        return res
    

from typing import List


class Solution:
    def findSolution(self, customfunction: 'CustomFunction', z: int) -> List[List[int]]:
        res = []
        # 因为数据大小范围比较固定，故可以直接使用破解法
        for x in range(1, 1001):
            for y in range(1, 1001):
                if customfunction.f(x, y) == z:
                    res.append([x, y])
                elif customfunction.f(x, y) > z:
                    break
        return res