[Go back](../README.md)

# `GlobalVariable`

You can create a global variable, subscribe on it's updates. Use [`AppEvent`](./AppEvent.md) under the hood.

```ts
import { GlobalVariable } from "@blat-js/helpers/GlobalVariable";

const myVariable = new GlobalVariable({ initialValue: 0 });

// To get value
myVariable.get();

// To set value
myVariable.set(1);

// To subscribe on change events
myVariable.subscribe((value) => {
  console.log(value);
});
```
