import { validateTree } from '../tasks/validateTree';

test('((()() is NOT a valid tree representation', () =>
  expect(validateTree('((()()')).toBe(false));

test(')( is NOT a valid tree representation', () =>
  expect(validateTree(')(')).toBe(false));

test('()() is NOT a valid tree representation', () =>
  expect(validateTree('()()')).toBe(false));

test('"" is NOT a valid tree representation', () =>
  expect(validateTree('')).toBe(false));

test('()asd() is NOT a valid tree representation', () =>
  expect(validateTree('()asd()')).toBe(false));

test('(()()) is a valid tree representation', () =>
  expect(validateTree('(()())')).toBe(true));

test('() is a valid tree representation', () =>
  expect(validateTree('()')).toBe(true));

test('((())) is a valid tree representation', () =>
  expect(validateTree('((()))')).toBe(true));
