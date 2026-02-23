[Go back](../README.md)

# `safeJsonParse`

Allows you to ignore `JSON.parse` error and return a default value

```ts
import { safeJsonParse } from "@blat-js/helpers/safeJsonParse";

const validJsonString = "{ \"value\": \"Hello\" }"
const invalidJsonString = "Invalid string"

// With valid JSON string works as regular JSON.parse
console.log(safeJsonParse(validJsonString)) // { value: "Hello" }

// Without default value will return null on error
console.log(safeJsonParse(invalidJsonString)) // null

// With default value will return it on error
console.log(safeJsonParse(invalidJsonString, 'ERROR')) // "ERROR"
```
