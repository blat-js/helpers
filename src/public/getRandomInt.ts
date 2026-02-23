/**
 * @param min `0` by default
 * @param max `10` by default
 * @returns Random number
 */
export const getRandomInt = (min: number = 0, max: number = 10) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
