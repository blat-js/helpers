import { describe, expect, it } from 'vitest';
import { round } from './round';

describe('round', () => {
  const VALUE = 10.0123456789;
  it('To int (no precision)', () => {
    expect(round(VALUE)).toBe(10);
  });

  it('To int (with precision)', () => {
    expect(round(VALUE, 0)).toBe(10);
  });

  it('To float', () => {
    expect(round(VALUE, 2)).toBe(10.01);
  });

  it('To long float', () => {
    expect(round(VALUE, 5)).toBe(10.01235);
  });
});
