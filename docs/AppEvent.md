[Go back](../README.md)

# `AppEvent`

Allows you to subscribe or emit any data type that you need from any parts of your application. Can be used in any context

```ts
import { AppEvent } from "@blat-js/helpers/AppEvent";

type MyEventData = {
  value: string;
};
const myEvent = new AppEvent<MyEventData>();

// To subscribe on event
const handleEvent = (data: MyEventData) => {
  console.log(data.value);
};
myEvent.subscribe(handleEvent);

// To emit event
myEvent.emit({ value: "Hello" });

// To unsubscribe
myEvent.unsubscribe(handleEvent);

// To wait for a single event
const data = await myEvent.waitForOneEvent();
console.log(data.value);
```
