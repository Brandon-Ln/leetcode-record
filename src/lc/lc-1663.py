from string import ascii_lowercase


class Solution:
    def getSmallestString(self, n: int, k: int) -> str:
        # 使用列表来存储中间元素，最后做字符串拼接来节省字符串构造速度
        letters = []
        # 逆向循环 【0，n）
        for i in range(n - 1, -1, -1):
            # 最大的一轮的取值不能超过 26，不够 26 的时候取小值
            currMaxNum = min(26, k - i)
            currMaxLetter = ascii_lowercase[currMaxNum - 1]
            k -= currMaxNum
            letters.append(currMaxLetter)
        # 因为是逆向循环，所以拆入的元素也会需要倒置
        letters.reverse()
        return ''.join(letters)

s1 = Solution()
s1.getSmallestString(3, 27)