/** Checks if number is odd
 * @param value number to be checked
 * @returns information if number is odd
 */
export const isOdd = (value: number): boolean => {
  const remainder = Math.abs(value % 2);
  return remainder === 1;
};
