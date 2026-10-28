import test from 'node:test';
import assert from 'node:assert/strict';
import { confirm } from './confirm';

test('confirm helper formats default placeholder when no fallback is provided', () => {
  assert.equal(confirm('office address'), '[CONFIRM: office address]');
});

test('confirm helper returns explicit fallback when provided', () => {
  assert.equal(confirm('email', '[CONFIRM: info@mangalindia.com]'), '[CONFIRM: info@mangalindia.com]');
});
