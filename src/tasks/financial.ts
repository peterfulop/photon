/**
 *
 * Write a function what use a number or a string of a number and a precision with a default value of 2.
 * Result should be a string of a given number transformed to a given precision, using correction if needed.
 * 0-4 -> 0
 * 5-9 -> 1
 *
 * financial(123) -> '123.00'
 *
 * financial(1.23e5, 0) -> '123000'
 *
 * financial(1.005) -> '1.01'
 *
 * financial(3.4523e-2, 4) -> '0.0345'
 *
 * @param number {number|string} - the given number what should be transformed to string
 * @param precision {number} - the number of digits to appear after the decimal point, default 2
 * @return {string} - string of a given number transformed to a given precision, using correction if needed
 */

export const financial = (number: number | string, precision = 2): string => {
  return Number(number).toFixed(precision);
};
