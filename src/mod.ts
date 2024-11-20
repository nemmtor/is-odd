/** Checks if number is odd
 * @param value number to be checked
 * @returns information if number is odd
 * @example
 * ```ts
 * const result = isOdd(3); // true
 * ````
 * @example
 * ```ts
 * const result = isOdd(4); // false
 * ````
 */
export const isOdd = (value: number): boolean => {
  const remainder = Math.abs(value % 2);
  return remainder === 1;
};
