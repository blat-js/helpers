[Go back](../README.md)

# `sleep`

Allows to wait for approximately provided duration in milliseconds.

```ts
import { sleep } from "@blat-js/helpers/sleep";
// ...
console.log("Before");
await sleep(1000);
console.log("After"); // Will be logged after a second
// ...
```
