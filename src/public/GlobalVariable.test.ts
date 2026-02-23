import { describe, expect, it, vi } from 'vitest';
import { GlobalVariable } from './GlobalVariable';

describe('GlobalVariable', () => {
  it('simple change', () => {
    const variable = new GlobalVariable({ initialValue: 0 });

    expect(variable.get()).toBe(0);
    variable.set(1);
    expect(variable.get()).toBe(1);
  });

  it('subscribe', () => {
    const variable = new GlobalVariable({ initialValue: 0 });
    const callback = vi.fn().mockImplementation(() => unsubscribe());

    const unsubscribe = variable.subscribe(callback);
    variable.set(100);

    expect(callback).toBeCalledWith(100);
  });
});
