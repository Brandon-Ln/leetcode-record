class Solution:
    def romanToInt(self, s: str) -> int:
        # 首先声明罗马字母对应数值的哈希表
        hashMap = {
            "I":             1,
            "V":             5,
            "X":             10,
            "L":             50,
            "C":            100,
            "D":            500,
            "M":            1000
        }
        res = 0
        preLetter = s[0]
        # 遍历原字符
        for letter in s:
            value = hashMap[letter]
            preValue = hashMap[preLetter]
            # 正常情况下直接加和即可
            res += value
            '''
            如果出现了当前字母对应数值大于前一个字母对应数值的情况
            当前值需要减去 2 * preValue
            '''
            if value > preValue:
                res -= preValue * 2
            preLetter = letter # 记录前序字母
        return res

s1 = Solution().romanToInt
s1("IX")
