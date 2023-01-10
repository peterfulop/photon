/**
 *
 * Write a function what using the given natural numbers and generate a multiply matrix according to them.
 * By creating a two-dimensional array, x is the first and y is the second. In the matrix, place numbers derived by
 * its coordinates x, y => (x + 1) * (y + 1)
 * multiplyMatrix(3, 5) = [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [3, 6, 9, 12, 15]]
 *
 * @param x {int} - dimension of x
 * @param y {int} - dimension of y
 * @return {Array} - an array of multiply numbers in a x, y dimensional matrix
 */

export const multiplyMatrix = (X: number, Y: number): number[][] => {
  const mainArray: number[][] = [];
  for (let i = 0; i < X; i++) {
    const innerArray: number[] = [];
    let scale = i + 1;
    for (let j = 0; j < Y; j++) {
      if (innerArray.length === 0) {
        innerArray.push(scale);
      } else {
        const prevValue = innerArray[j - 1];
        innerArray.push(prevValue + scale);
      }
    }
    mainArray.push(innerArray);
  }
  return mainArray;
};
