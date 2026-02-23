[Go back](../README.md)

# `accurateSleep`

It uses Web Audio API instead of simple `setTimeout`, so it works more precisely. Could be used only in browsers.

```ts
import { sleep } from "@blat-js/helpers/accurateSleep";
// ...
console.log("Before");
await accurateSleep(1000);
console.log("After"); // Will be logged after a second
// ...
```
