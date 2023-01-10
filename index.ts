import { financial } from './src/tasks/financial';
import { makeInvoicesData } from './src/tasks/makeInvoicesData';
import { multiplyMatrix } from './src/tasks/multiplyMatrix';
import { validateTree } from './src/tasks/validateTree';

const invoicesData = [
  { currency: 'HUF', amount: 34000, description: 'xy' },
  { currency: 'HUF', amount: 34000, description: 'y' },
  { currency: 'HUF', amount: 42000, description: 'sd' },
  { currency: 'EUR', amount: 340, description: 'xrt' },
];

console.log('makeInvoicesData:', ...makeInvoicesData(invoicesData));
console.log('validateTree:', validateTree('(()())'));
console.log('financial:', financial(123), '=> 123.00');
console.log('multiplyMatrix:', multiplyMatrix(3, 5));
