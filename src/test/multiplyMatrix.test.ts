import { multiplyMatrix } from '../tasks/multiplyMatrix';

test('1, 2 to equal [ [ 1, 2 ] ]', () =>
  expect(multiplyMatrix(1, 2)).toMatchObject([[1, 2]]));

test('3, 5 to equal [ [ 1, 2, 3, 4, 5 ], [ 2, 4, 6, 8, 10 ], [ 3, 6, 9, 12, 15 ] ]', () =>
  expect(multiplyMatrix(3, 5)).toMatchObject([
    [1, 2, 3, 4, 5],
    [2, 4, 6, 8, 10],
    [3, 6, 9, 12, 15],
  ]));
