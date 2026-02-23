export const round = (value: number, precision = 0) => {
  return Math.round(value * 10 ** precision) / 10 ** precision;
};
