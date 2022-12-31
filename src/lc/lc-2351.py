class Solution:
    def repeatedCharacter(self, s: str) -> str:
        hashSet = set()
        for str in s:
            if str in hashSet:
                return str
            hashSet.add(str)
        