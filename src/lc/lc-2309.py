class Solution:
    def greatestLetter(self, s: str) -> str:
        # 转哈希集合加快查询速度
        letterSet = set(s)
        res = ''
        # 返回的字母需要为大写形式
        for letter in s:
            if letter.lower() in letterSet and letter.lower() != letter and letter > res:
                res = letter
        return res

        