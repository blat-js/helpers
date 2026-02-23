import { describe, expect, it } from 'vitest';
import { getRandomInt } from './getRandomInt';

describe('getRandomInt', () => {
  it('No arguments', () => {
    const result = getRandomInt();
    expect(result >= 0).toBeTruthy();
    expect(result <= 10).toBeTruthy();
  });

  it('10 <= v <= 100', () => {
    const result = getRandomInt(10, 100);
    expect(result >= 10).toBeTruthy();
    expect(result <= 100).toBeTruthy();
  });

  it('12345 <= v <= 54321', () => {
    const result = getRandomInt(12345, 54321);
    expect(result >= 12345).toBeTruthy();
    expect(result <= 54321).toBeTruthy();
  });
});
