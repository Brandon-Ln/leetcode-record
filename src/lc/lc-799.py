class Solution:
    def champagneTower(self, poured: int, query_row: int, query_glass: int) -> float:
        # 模拟完整的过程即可，先把所有酒倒到第一个杯子里面
        prevRow = [poured] # 第 0 层
        for i in range(1, query_row + 1):
            currRow = [0] * (i + 1) # 初始化当前行
            for j, volume in enumerate(prevRow):
                # 判断当前的被子容量是否大于 1，大于 1 才会发生倾倒
                if volume > 1:
                    less = (volume - 1) / 2
                    # 这里使用 += 号，因为可能发生一个杯子被倒多次的情况
                    currRow[j] += less
                    currRow[j + 1] += less
            prevRow = currRow
        return min(1, prevRow[query_glass]) # 杯子的容量最多为 1
         
s = Solution()
s.champagneTower(1, 1, 1)           