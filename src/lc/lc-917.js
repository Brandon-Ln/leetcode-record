function reverseOnlyLetters(s) {
  const letters = s.split("");
  let left = 0;
  let right = letters.length - 1;
  while (left < right) {
    while (left < letters.length && !isLetter(letters[left])) {
      left++;
    }
    while (right >= 0 && !isLetter(letters[right])) {
      right--;
    }
    if (left < right) {
      let temp = letters[left];
      letters[left] = letters[right];
      letters[right] = temp;
    }
    left++;
    right--;
  }
  return letters.join("");
}

const aCode = "a".charCodeAt(0);
const zCode = "z".charCodeAt(0);
const ACode = "A".charCodeAt(0);
const ZCode = "Z".charCodeAt(0);

function isLetter(char) {
  const currCode = char.charCodeAt(0);
  return (
    (currCode >= ACode && currCode <= ZCode) ||
    (currCode >= aCode && currCode <= zCode)
  );
}

reverseOnlyLetters("7_28]");
