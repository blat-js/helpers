import { describe, expect, it, vi } from 'vitest';
import { NamedAppEvent, emitNamedEvent, subscribeOnNamedEvent, unsubscribeFromNamedEvent } from './namedAppEvent';

const TEST_EVENT_NAME = 'test-event';
type TestEventData = { val: number };

describe('namedEvent', () => {
  it('subscribeOnNamedEvent + emitNamedEvent', () => {
    const callback = vi.fn().mockImplementation(() => unsubscribe());

    const unsubscribe = subscribeOnNamedEvent(TEST_EVENT_NAME, callback);

    emitNamedEvent<TestEventData>(TEST_EVENT_NAME, { val: 1 });

    expect(callback).toBeCalledWith({ val: 1 });
  });

  it('unsubscribeFromNamedEvent', () => {
    const callback = vi.fn().mockImplementation(() => unsubscribe());

    const unsubscribe = subscribeOnNamedEvent(TEST_EVENT_NAME, callback);
    unsubscribeFromNamedEvent(TEST_EVENT_NAME, callback);

    emitNamedEvent<TestEventData>(TEST_EVENT_NAME, { val: 1 });

    expect(callback).not.toBeCalled();
  });

  it('NamedAppEvent. Basic flow', () => {
    const event = new NamedAppEvent<TestEventData>({ name: TEST_EVENT_NAME });

    const callback = vi.fn().mockImplementation(() => unsubscribe());

    const unsubscribe = event.subscribe(callback);
    event.emit({ val: 1 });
    expect(callback).toBeCalledWith({ val: 1 });
  });

  it('NamedAppEvent.unsubscribe', () => {
    const event = new NamedAppEvent<TestEventData>({ name: TEST_EVENT_NAME });

    const callback = vi.fn().mockImplementation(() => unsubscribe());

    const unsubscribe = event.subscribe(callback);
    event.unsubscribe(callback);
    event.emit({ val: 1 });
    expect(callback).not.toBeCalled();
  });

  it('NamedAppEvent.waitForOneEvent', async() => {
    const event = new NamedAppEvent<TestEventData>({ name: TEST_EVENT_NAME });

    const promise = event.waitForOneEvent();

    event.emit({ val: 1 });
    const value = await promise;
    expect(value).toEqual({ val: 1 });
  });
    
});
