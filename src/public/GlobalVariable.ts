import { AppEvent } from './AppEvent';

export type GlobalVariableParams<T> = { initialValue: T };
export class GlobalVariable<T> {
  public readonly event = new AppEvent<T>();
  private value: T;

  constructor(params: GlobalVariableParams<T>) {
    this.value = params.initialValue;
  }

  public set(value: T) {
    this.value = value;
    this.event.emit(value);
  }

  public get() {
    return this.value;
  }

  public subscribe(callback: (v: T) => void) {
    return this.event.subscribe(callback);
  }
}
