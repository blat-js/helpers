import { describe, expect, it, vi } from 'vitest';
import { AppEvent } from './AppEvent';

describe('AppEvent', () => {
  const event = new AppEvent<number>();

  it('subscribe', () => {
    const callback = vi.fn().mockImplementation(() => unsubscribe());

    const unsubscribe = event.subscribe(callback);
    event.emit(1);
    expect(callback).toBeCalledWith(1);
  });

  it('waitForOneEvent', async () => {
    const valuePromise = event.waitForOneEvent();
    event.emit(2);
    const value = await valuePromise;
    expect(value).toBe(2);
  });

  it('unsubscribe', () => {
    const callback = vi.fn();

    event.subscribe(callback);
    event.unsubscribe(callback);
    event.emit(3);

    expect(callback).not.toBeCalled();
  });

  it('emit', () => {
    const callback = vi.fn();

    event.subscribe(callback);
    event.emit(4);
    expect(callback).toBeCalledWith(4);
  });
});
