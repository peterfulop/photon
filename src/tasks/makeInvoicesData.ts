/**
 * Billing item is an object of
 * - currency
 * - amount
 * - description
 *
 * An invoice is created by currency therefore EURO invoice collect all the item with currency EURO.
 * An invoice is an object of :
 *  - currency
 *  - items: list of invoice items
 *    invoice item is an object of:
 *     - amount
 *     - noo - number of occurrences
 *
 *  An invoice item collect all the same amount of billing item and the occurrences stored in the noo attribute.
 *
 *  ex. [
 *   {currency: 'HUF', amount: 34000, description: 'xy'},
 *   {currency: 'HUF', amount: 34000, description: 'y'},
 *   {currency: 'HUF', amount: 42000, description: 'sd'},
 *   {currency: 'EUR', amount: 340, description: 'xrt'}
 *  ]
 *
 *  will result
 *
 *  [
 *      {
 *          currency: 'HUF',
 *          items: [
 *              {
 *                  amount: 42000
 *                  noo: 1
 *              },
 *              {
 *                  amount: 34000,
 *                  noo: 2
 *              }
 *          ]
 *      },
 *      {
 *          currency: 'EUR',
 *          items: [
 *              {
 *                  amount: 340,
 *                  noo: 1,
 *              }
 *          ]
 *      }
 *  ]
 *
 * @param billingItems {Array} - array of object of billing item
 * @return {*[]} - array of object of invoice data
 */

import { groupBy } from '../utilities/groupBy';

type BillingItem = {
  currency: string;
  amount: number;
  description: string;
};

type InvoiceDataItem = {
  amount: number;
  noo: number;
};

type InvoiceData = {
  currency: string;
  items: InvoiceDataItem[];
};

export const makeInvoicesData = (
  billingItems: BillingItem[]
): InvoiceData[] => {
  const groupByCurrency = groupBy(billingItems, (i) => i.currency);
  return Object.entries(groupByCurrency).map((groups) => {
    const currency = groups[0];
    const billingItems = groups[1];
    const amounts = billingItems.map((billingItem) => billingItem.amount);
    const items: InvoiceDataItem[] = [];

    amounts.map((amount) => {
      const index = items.findIndex((obj) => obj.amount === amount);
      if (index === -1) {
        items.push({
          amount,
          noo: 1,
        });
      } else {
        items[index].noo += 1;
      }
    });
    return {
      currency,
      items,
    };
  });
};
