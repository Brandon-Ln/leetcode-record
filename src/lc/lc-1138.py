class Solution:
    def alphabetBoardPath(self, target: str) -> str:
        '''
        本题目考察曼哈顿距离的计算
        曼哈顿距离为 |x1 - x2| + |y1 - y2|
        初始坐标为 0, 0
        说明位于单元格左上角
        算曼哈顿距离的时候都是以原点为坐标系
        这里需要额外注意 z 的位置
        由于是额外多出的一行
        所以走格子的时候，从其他字母走到 z 要优先考虑往左走，从 z 走到其他格子要优先考虑往上走
        '''
        operations = []
        currX = 0
        currY = 0
        itemPerRow = 5
        for letter in target:
            distance = ord(letter) - ord('a')
            toX = distance % itemPerRow
            toY = distance // itemPerRow
            if toX <= currX:
                operations.append('L' * (currX - toX))
            if toY <= currY:
                operations.append('U' * (currY - toY))
            if toX > currX:
                operations.append('R' * (toX - currX))
            if toY > currY:
                operations.append('D' * (toY - currY))
            # 到达目标坐标,更新当前坐标
            operations.append('!')
            currX, currY = toX, toY

        return ''.join(operations)
