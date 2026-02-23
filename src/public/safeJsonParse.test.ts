import { describe, expect, it } from 'vitest';
import { safeJsonParse } from './safeJsonParse';

describe('safeJsonParse', () => {
  const DEFAULT_VALUE = 'DEFAULT';
  const INVALID_DATA = '{ a: 1 }';
  const VALUE = { some: { value: 1, other: ['a', 'b'] } };
  const stringifiedValue = JSON.stringify(VALUE);

  it('Success (not default value)', () => {
    const result = safeJsonParse(stringifiedValue);

    expect(result).toEqual(VALUE);
  });

  it('Success (with default value)', () => {
    const result = safeJsonParse(stringifiedValue, DEFAULT_VALUE);

    expect(result).toEqual(VALUE);
  });

  it('Fail (not default value)', () => {
    const result = safeJsonParse(INVALID_DATA);

    expect(result).toBe(null);
  });

  it('Fail (with default value)', () => {
    const result = safeJsonParse(INVALID_DATA, DEFAULT_VALUE);

    expect(result).toBe(DEFAULT_VALUE);
  });
});
