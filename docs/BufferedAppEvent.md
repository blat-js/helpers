[Go back](../README.md)

# `BufferedAppEvent`

Almost the same as [`AppEvent`](./AppEvent.md) but with events buffer. If event was emitted, but no subscribers handled it, then it will be placed in a queue and when any subscription will be added, all events will be passed there in the original order.

```ts
import { BufferedAppEvent } from "@blat-js/helpers/BufferedAppEvent";
// ... Same interface as in AppEvent
```
