class Solution:
    def customSortString(self, order: str, s: str) -> str:
        hashMap = {}
        strList = []
        for currLetter in s:
            currCount = 1 if currLetter not in hashMap else hashMap[currLetter] + 1
            hashMap[currLetter] = currCount
        for currLetter in order:
            if currLetter in hashMap:
                strList.append(currLetter * hashMap[currLetter])
                hashMap[currLetter] = 0
        for letter, count in hashMap.items():
            if not count == 0:
                strList.append(letter * count)
        return "".join(strList)


s1 = Solution()
s1.customSortString("cba", "aabcdd")
