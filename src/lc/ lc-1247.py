class Solution:
    def minimumSwap(self, s1: str, s2: str) -> int:
        '''
        首先对 x 和 y 进行计数
        如果 x 和 y 中出现任意一个统计出来是奇数的
        那肯定不够分，直接返回 -1
        '''
        xCount = 0
        yCount = 0
        totalS = s1 + s2
        length = len(s1)
        for s in totalS:
            if s == 'x':
                xCount += 1
            else:
                yCount += 1
        '''
        走入这个分支的时候说明一定存在可以通过交换得到相等次数的场景
        这里使用以 2 为单元，考虑最简单的交换相等
        xx/yy 需要一次交换相等
        xy/yx 需要两次交换相等
        之后我们统计两个字符中，不相同字符的个数 d
        我们总是优先使用 xx 和 yy 的交换，因为次数更少
        接着判断不同字符数中 x 为 y 的个数
        如果 x 为偶数，则说明 xx 正好够用，交换数 为 d // 2
        如果 x 为奇数，则说明会多出一个 xy，交换数为 d // 2 + 1
        '''
        if xCount % 2 == 0 and yCount % 2 == 0:
            diffS = ''
            for i in range(length):
                if s1[i] != s2[i]:
                    diffS += s1[i]
            xCountInDiffS = 0
            for s in diffS:
                if s == 'x':
                    xCountInDiffS += 1
            return len(diffS) // 2 if xCountInDiffS % 2 == 0 else len(diffS) // 2 + 1
        return -1