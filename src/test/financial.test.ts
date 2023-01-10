import { financial } from '../tasks/financial';

test('123 to equal 123.00', () => expect(financial(123)).toBe('123.00'));

test('1.23e5, 0 to equal 123000', () =>
  expect(financial('1.23e5', 0)).toBe('123000'));

test('1.005 to equal 1.01', () => expect(financial(1.005)).toBe('1.01'));

test('3.4523e-2, 4 to equal 0.0345', () =>
  expect(financial(3.4523e-2, 4)).toBe('0.0345'));
