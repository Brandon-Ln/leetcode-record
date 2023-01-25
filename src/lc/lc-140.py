from typing import List

class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        # 将 list 转换为 set 来提高查询速度
        wordSet = set(wordDict)
        # 存储 dfs 递归的查询结果
        cacheMap = dict[str, List[List[str]]]()
        length = len(s)
        def dfs(startIndex: int) -> List[List[str]]:
            currWordLists = []
            # 递归出口，返回空数组以便拼接
            if startIndex == length:
                return [[]]
            for i in range(startIndex, length + 1):
                currWord = s[startIndex:i]
                # 查询当前的单词切片是否存在于 set
                if currWord in wordSet:
                    restWordLists = [[]]
                    # 查询缓存
                    if i in cacheMap:
                        restWordLists = cacheMap[i].copy()
                    else:
                        restWordLists = dfs(i)  
                        cacheMap[i] = restWordLists.copy()

                    for restWordList in restWordLists:
                        currWordLists.append([currWord] + restWordList)
            return currWordLists
        breakWordLists = dfs(0)
        return [' '.join(wordList) for wordList in breakWordLists]
 
s1 = Solution()
res = s1.wordBreak("catsanddog", ["cat","cats","and","sand","dog"])
print(res)