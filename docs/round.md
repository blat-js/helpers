[Go back](../README.md)

# `round`

Util to mathematically round number to the provided precision

```ts
import { round } from "@blat-js/helpers/round";

// No precision passed
const rounded = round(1.05);
console.log(rounded); // 1

// With provided precision
const rounded = round(1.05, 1);
console.log(rounded); // 1.1
```
