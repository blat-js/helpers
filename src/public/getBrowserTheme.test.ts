import { beforeEach, describe, expect, it } from 'vitest';
import { getBrowserTheme } from './getBrowserTheme';

describe('getBrowserTheme', () => {
  let result = false;

  global.window = {} as Window & typeof globalThis;
  window.matchMedia = () => ({ matches: result }) as MediaQueryList;

  beforeEach(() => {
    result = false;
  });

  it('light theme', () => {
    const { isDark } = getBrowserTheme();
    expect(isDark).toBeFalsy();
  });

  it('dark theme', () => {
    result = true;
    const { isDark } = getBrowserTheme();
    expect(isDark).toBeTruthy();
  });
});
