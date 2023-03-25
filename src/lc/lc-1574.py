from typing import List


class Solution:
    def findLengthOfShortestSubarray(self, arr: List[int]) -> int:
        n = len(arr)
        right = n - 1
        while right and arr[right - 1] <= arr[right]:
            right -= 1
        if right == 0:  # arr 已经是非递减数组
            return 0
        # 此时 arr[right-1] > arr[right]
        ans = right  # 删除 arr[:right]
        left = 0
        while True:  # 枚举 right
            while right == n or arr[left] <= arr[right]:
                ans = min(ans, right - left - 1)  # 删除 arr[left+1:right]
                if arr[left] > arr[left + 1]:
                    return ans
                left += 1
            right += 1


Solution().findLengthOfShortestSubarray([5, 4, 3, 2, 1])
