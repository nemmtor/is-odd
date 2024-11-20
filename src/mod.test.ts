import { assertEquals } from '@std/assert';
import { isOdd } from './mod.ts';

Deno.test('isOdd', () => {
  const got = isOdd(3);
  const want = true;

  assertEquals(got, want);
});
