from typing import List

# https://leetcode.cn/problems/3sum/


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        '''
        这道题对等式 nums[i] + nums[j] + nums[k] == 0 进行变换得到 nums[i] + nums[j] == - nums[k]
        在对数组排序之后，可以转换为可以使用相向双指针算法求解的问题
        '''
        sortedNums = sorted(nums)
        length = len(nums)
        res = []
        '''
        之后枚举数组中的各个元素，将枚举元素作为 nums[k]
        以枚举元素作为基点，来使用双向双指针算法
        这里的循环索引范围需要注意，最多只能到 length - 2
        因为元组需要至少有三个元素
        '''
        for k in range(0, length - 2):
            i = k + 1
            j = length - 1
            # 此处考虑基点去重，这里注意不能等于 0
            # input case: [0, 0, 0]
            if k > 0 and sortedNums[k] == sortedNums[k - 1]:
                continue
            while i < j:
                currSum = sortedNums[i] + sortedNums[j]
                if currSum + sortedNums[k] == 0:
                # 此处考虑左右指针去重，若当前左指针元素左移动过后没有发生元素变化则继续左移动，右指针元素同理
                    while i + 1 < length and sortedNums[i] == sortedNums[i + 1]:
                        i += 1
                    while j - 1 <= 0 and sortedNums[j] == sortedNums[j - 1]:
                        j -= 1
                    res.append([sortedNums[i], sortedNums[j], sortedNums[k]])
                    i += 1
                    j -= 1
                elif currSum + sortedNums[k] > 0:
                    j -= 1
                else:
                    i += 1
        return res

Solution().threeSum([-1,0,1,2,-1,-4])