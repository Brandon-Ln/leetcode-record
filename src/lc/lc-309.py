from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # 边界条件
        if len(prices) < 2:
            return 0
        '''
        初始化二维 dp 数组来统计状态
        状态有两种
        dp[0][i] 表示第 i 天买入股票情况下的最大利润
        dp[1][i]，表示第 i 天卖出股票情况下获得的最大利润
        dp[2][i]，表示第 i 天卖出股票情况下获得的最大利润（处于冷静期）
        '''
        dp = [[-prices[0]] * len(prices), [0] * len(prices), [0] * len(prices)]

        for currIndex in range(1, len(prices)):
            currStockPrice = prices[currIndex]
            # 每一天的操作有买入股票、卖出股票、啥都不做
            # 买入股票的时候需要满足冷冻期
            dp[0][currIndex] = max(
                dp[2][currIndex - 1] - currStockPrice, dp[0][currIndex - 1])
            dp[1][currIndex] = max(dp[1][currIndex - 1],
                                   dp[0][currIndex - 1] + currStockPrice)
            dp[2][currIndex] = max(dp[2][currIndex], dp[1][currIndex - 1])
        return max(dp[1][-1], dp[2][-1])


s1 = Solution()
s1.maxProfit([1, 2, 3, 0, 2])
