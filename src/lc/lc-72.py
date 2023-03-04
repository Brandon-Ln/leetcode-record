class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        '''
        这道题目是一个经典的动态规划例题
        因为这里需要表示两个单词的状态，故需要使用二维 dp
        dp[i][j] 表示把单词1的第 i 位 转换到单词2的第 j 位所需的次数
        '''
        len1 = len(word1)
        len2 = len(word2)
        dp = [[0 for _ in range(len2 + 1)] for _ in range(len1 + 1)]
        # 初始化 dp 数组
        for i in range(len1 + 1):
            dp[i][0] = i
        for i in range(len2 + 1):
            dp[0][i] = i
        # 自底向上填表
        for i in range(1, len1 + 1):
            for j in range(1, len2 + 1):
                '''
                如果当前两个字母不相等时，则需要计算把 word[i] 变为 word[j] 所需操作数
                否则可以直接复用 word[i - 1] 和 word[j - 1]
                '''
                # 因为索引从 0 开始，所以索引要减去 1
                if word1[i - 1] != word2[j - 1]:
                    add_ops = dp[i][j - 1] + 1
                    minus_ops = dp[i - 1][j] + 1
                    modify_ops = dp[i - 1][j - 1] + 1
                    dp[i][j] = min(add_ops, minus_ops, modify_ops)
                else:
                    dp[i][j] = dp[i - 1][j - 1]
        return dp[len1][len2]


s1 = Solution().minDistance
s1("horse",
   "ros")
