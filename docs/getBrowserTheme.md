[Go back](../README.md)

# `getBrowserTheme`

Allows to define if browser is in dark mode.

Example:

```ts
import { getBrowserTheme } from "@blat-js/helpers/getBrowserTheme";

const { isDark } = getBrowserTheme();
const theme = isDark ? "dark" : "light";
```
