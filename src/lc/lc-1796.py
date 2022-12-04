class Solution:
    def secondHighest(self, s: str) -> int:
        first = -1
        second = -1
        for currStr in s:
            if currStr.isdigit():
                toInt = int(currStr)
                # second 产生的第一个可能场景，由 first 被替换
                if toInt > first:
                    second = first
                    first = toInt
                # second 产生的第二个可能场景，由后续遍历产生
                if toInt > second and toInt < first:
                    second = toInt
        return second
