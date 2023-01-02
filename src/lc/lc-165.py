class Solution:
    def compareStr(self, numStr1: str, numStr2: str) -> bool:
        ifBigger = int(numStr1.lstrip("0") or "0") > int(
            numStr2.lstrip("0") or "0")
        ifSmaller = int(numStr1.lstrip("0") or "0") < int(
            numStr2.lstrip("0") or "0")
        return 1 if ifBigger else -1 if ifSmaller else 0

    def compareVersion(self, version1: str, version2: str) -> int:
        versionList1 = version1.split(".")
        versionList2 = version2.split(".")
        left = 0
        right = max(len(versionList1), len(versionList2))
        while left < right:
            currStr1 = versionList1[left] if left < len(versionList1) else "0"
            currStr2 = versionList2[left] if left < len(versionList2) else "0"
            currRes = self.compareStr(currStr1, currStr2)
            if currRes != 0:
                return currRes
            left += 1
        return 0


s1 = Solution()
s1.compareVersion("1.01", "1.001")
