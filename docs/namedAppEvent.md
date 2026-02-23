[Go back](../README.md)

# `namedAppEvent`

Pretty much the same as [`AppEvent`](./AppEvent.md) but you don't have to create an instance of the class. You can import it in different files and connect them using event names.

```ts
import { namedAppEvent } from "@blat-js/helpers/namedAppEvent";

type EventData = {
  value: string;
};
const handleEvent = (data: EventData) => {
  console.log(data.value);
};
const TEST_EVENT_NAME = "some-event";

// To subscribe on event
subscribeOnNamedEvent(TEST_EVENT_NAME, handleEvent);

// To emit event
emitNamedEvent(TEST_EVENT_NAME, { value: "test" });

// To unsubscribe from event
unsubscribeFromNamedEvent(TEST_EVENT_NAME, handleEvent);

// To create an instance of NamedAppEvent
const myEvent = new NamedAppEvent<EventData>({ name: "my-event" });
// You can use same methods as with AppEvent
```
