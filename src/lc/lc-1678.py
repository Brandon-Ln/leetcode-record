class Solution:
    def interpret(self, command: str) -> str:
        res = ""
        for index, currLetter in enumerate(command):
            if currLetter == "G":
                res += currLetter
            elif currLetter == ")":
                res += "o" if command[index - 1] == "(" else "al"
        return res
