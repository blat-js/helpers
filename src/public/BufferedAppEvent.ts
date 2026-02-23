/**
 * @description BufferedAppEvent allows ypu to be sure that any emitted value will wait for at least one subscriber
 */
export class BufferedAppEvent<T> {
  private queue: T[] = [];
  private readonly listeners = new Set<(v: T) => void>();

  /**
   * @description Allows you to subscribe on the event
   * @param callback Value handler
   * @returns Unsubscribe function
   */
  public subscribe(callback: (v: T) => void) {
    if (this.queue.length) {
      this.queue.forEach(callback);
      this.queue = [];
    }

    this.listeners.add(callback);
    return () => {
      this.unsubscribe(callback);
    };
  }

  /**
   * @description Waits for one event
   * @returns Promise with a value
   */
  public waitForOneEvent() {
    return new Promise<T>((resolve) => {
      const unsubscribe = this.subscribe((value) => {
        resolve(value);
        unsubscribe();
      });
    });
  }

  /**
   * @description Unsubscribes from the event
   * @param callback Value handler
   */
  public unsubscribe(callback: (v: T) => void) {
    this.listeners.delete(callback);
  }

  /**
   * @description Emits an event
   * @param value Value
   */
  public emit(value: T) {
    if (this.listeners.size === 0) {
      this.queue.push(value);
      return;
    }

    for (const callback of this.listeners) {
      callback(value);
    }
  }
}
