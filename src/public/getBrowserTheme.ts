/**
 * @description Checks if browser is in dark mode
 */
export const getBrowserTheme = () => {
  const isDark = 'matchMedia' in window && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return { isDark };
};
