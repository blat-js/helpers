type Callback = (v: unknown) => void;
const eventsMap = new Map<string, Set<Callback>>();

export const subscribeOnNamedEvent = <T>(name: string, callback: (v: T) => void) => {
  let set = eventsMap.get(name);
  if (!set) {
    set = new Set();
    eventsMap.set(name, set);
  }
  set.add(callback as Callback);

  return () => {
    unsubscribeFromNamedEvent(name, callback);
  };
};

export const unsubscribeFromNamedEvent = <T = unknown>(name: string, callback: (v: T) => void) => {
  eventsMap.get(name)?.delete(callback as Callback);
  if (eventsMap.get(name)?.size === 0) {
    eventsMap.delete(name);
  }
};

export const emitNamedEvent = <T>(name: string, value: T) => {
  eventsMap.get(name)?.forEach((callback) => {
    callback(value);
  });
};

export type NamedAppEventParams = {
  name: string;
};
export class NamedAppEvent<T> {
  public readonly name: string;

  constructor(params: NamedAppEventParams) {
    this.name = params.name;
  }

  public subscribe(callback: (v: T) => void) {
    return subscribeOnNamedEvent(this.name, callback);
  }

  public emit(value: T) {
    emitNamedEvent(this.name, value);
  }

  public unsubscribe(callback: (v: T) => void) {
    unsubscribeFromNamedEvent(this.name, callback);
  }

  public waitForOneEvent() {
    return new Promise<T>((resolve) => {
      const unsubscribe = this.subscribe((value) => {
        resolve(value);
        unsubscribe();
      });
    });
  }
}

export default {
  subscribe: subscribeOnNamedEvent,
  unsubscribe: unsubscribeFromNamedEvent,
  emit: emitNamedEvent,
};
