// complete the given function

function palindrome(str){
 let cleaned = "";
  for (let char of s.toLowerCase()) {
    if (
      (char >= 'a' && char <= 'z') ||
      (char >= '0' && char <= '9')
    ) {
      cleaned += char;
    }
  }

  // Two-pointer check
  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

module.exports = palindrome
