class Solution:
    mod = 10 ** 9 + 7
    def numTilings(self, n: int) -> int:
        # 递归出口
        if n == 1:
            return 1
        dp = [0 for i in range(n + 1)]
        dp[0] = dp[1] = 1
        dp[2] = 2
        for i in range(3, n + 1):
            dp[i] = 2 * dp[i - 1] + dp[i -3]
        return dp[n] % self.mod
        