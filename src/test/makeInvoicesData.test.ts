import { makeInvoicesData } from '../tasks/makeInvoicesData';

test('a HUF invoice', () =>
  expect(
    makeInvoicesData([
      {
        currency: 'HUF',
        amount: 3422,
        description: 'milk',
      },
    ])
  ).toMatchObject([
    {
      currency: 'HUF',
      items: [
        {
          amount: 3422,
          noo: 1,
        },
      ],
    },
  ]));

test('multiple same value item', () =>
  expect(
    makeInvoicesData([
      {
        currency: 'HUF',
        amount: 300,
        description: 'bread',
      },
      {
        currency: 'HUF',
        amount: 300,
        description: 'bread',
      },
      {
        currency: 'HUF',
        amount: 300,
        description: 'bread',
      },
    ])
  ).toMatchObject([
    {
      currency: 'HUF',
      items: [
        {
          amount: 300,
          noo: 3,
        },
      ],
    },
  ]));
