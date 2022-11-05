class Solution:
    def parseBoolExpr(self, expression: str) -> bool:
        def calculate(a: str, b: str, operator: str):
            boolA, boolB = a == "t", b == "t"
            res = boolA | boolB if operator == "|" else boolA & boolB
            return "t" if res else "f"

        nums, operators = [], []

        for currLetter in expression:
            if currLetter == "t" or currLetter == "f":
                nums.append(currLetter)
            elif currLetter == "|" or currLetter == "&" or currLetter == "!":
                operators.append(currLetter)
            elif currLetter == "(":
                nums.append("(")
            elif currLetter == ")":
                currOperator, currRes = operators.pop(), ""
                while len(nums) >= 0 and nums[-1] != "(":
                    currNum = nums.pop()
                    currRes = (
                        currNum
                        if currRes == ""
                        else calculate(currNum, currRes, currOperator)
                    )
                if currOperator == "!":
                    currRes = "t" if currRes == "f" else "f"
                # pop the '('
                nums.pop()
                nums.append(currRes)
        return nums[0] == "t"


s1 = Solution().parseBoolExpr("|(&(t,f,t),!(t))")
print(s1)
