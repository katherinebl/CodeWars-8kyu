// Description:

// It is pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You are given one parameter, the original string. You do not have to worry with strings with less than two characters.

function removeChar(str) {
  return (newStr = str.slice(1, -1));
}
