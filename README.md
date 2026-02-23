# @blat-js/helpers

## Description

Just some bunch of useful functions. Moved it to a package just to stop copy and pasting them across projects

## Installation

1. Install the main package

```bash
npm install @blat-js/helpers
```

## Usage

| Name               | Doc link                           | Description                                                                                             |
| ------------------ | ---------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `accurateSleep`    | [link](./docs/accurateSleep.md)    | Wait for provided duration (more precise than regular sleep)                                            |
| `AppEvent`         | [link](./docs/AppEvent.md)         | Allows ypu to subscribe or emit any data that you need                                                  |
| `BufferedAppEvent` | [link](./docs/BufferedAppEvent.md) | Extended version of `AppEvent`. Store all unhandled emits in queue and fires them on first subscription |
| `getBrowserTheme`  | [link](./docs/getBrowserTheme.md)  | To define if browser is in dark mode                                                                    |
| `getRandomInt`     | [link](./docs/getRandomInt.md)     | To simply get a random integer in provided (if needed) range                                            |
| `GlobalVariable`   | [link](./docs/GlobalVariable.md)   | You can create a global variable, subscribe on it's updates. Use `AppEvent` under the hood              |
| `namedAppEvent`    | [link](./docs/namedAppEvent.md)    | Almost the same with the `AppEvent`, but it separates events by string names.                           |
| `round`            | [link](./docs/round.md)            | To round a number to the provided precision                                                             |
| `safeJsonParse`    | [link](./docs/safeJsonParse.md)    | Allows you to ignore `JSON.parse` error and return a default value                                         |
| `sleep`            | [link](./docs/sleep.md)            | Wait for provided duration                                                                              |

## Why

- To stop copy and pasting useful utils across projects

## Status

Actively maintained

## License

MIT
