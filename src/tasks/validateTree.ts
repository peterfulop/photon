/**
 * Write a function that can check and validate if the string of representation is really a Tree structure.
 *
 * A mode of tree is a parentheses pair like '()'.
 * All node can contain any number of sub node in an arbitrary deep.
 *
 * ex. (()()) and () and ((())) is valid
 * but ((()() and )( and ()() is invalid
 *
 * @param stringOfTree {string} - string representation of tree
 * @return {boolean} whether a tree is valid or not
 */

export const validateTree = (stringOfTree: string): boolean => {
  const leftParenthesis = '(';
  const rightParenthesis = ')';

  const stringArray = Array.from(stringOfTree);

  const nonAllowedChars = stringArray.filter(
    (char) => char !== leftParenthesis && char !== rightParenthesis
  );

  if (
    nonAllowedChars.length ||
    !stringOfTree ||
    !stringArray.includes(leftParenthesis) ||
    !stringArray.includes(rightParenthesis)
  ) {
    return false;
  }

  const countOfLeftBrackets = stringArray.filter(
    (char) => char === leftParenthesis
  ).length;

  const countOfRightBrackets = stringArray.filter(
    (char) => char === rightParenthesis
  ).length;

  if (countOfLeftBrackets === countOfRightBrackets) {
    if (countOfLeftBrackets % 2 !== 0) {
      if (stringOfTree !== ')(') {
        return true;
      }
    }
  }
  return false;
};
