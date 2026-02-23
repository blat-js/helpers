import { expect, it } from 'vitest';
import { sleep } from './sleep';

it('sleep', async () => {
  const DURATION = 100;

  const start = Date.now();
  await sleep(DURATION);
  const end = Date.now();

  const diff = end - start;
  expect(diff).toBeGreaterThanOrEqual(DURATION);
});
