// index.js

function isPalindrome(str) {
  // Clean the string by removing non-alphanumeric characters and converting to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Reverse the cleaned string
  const reversedStr = cleanedStr.split("").reverse().join("");

  // Check if the cleaned string is equal to its reverse
  return cleanedStr === reversedStr;
}

module.exports = isPalindrome;
