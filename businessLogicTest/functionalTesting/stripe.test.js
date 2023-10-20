import * as matchers from 'jest-extended';
import StripeApi from '../../src/API/stripeApi';
import { createPaymentId } from '../../src/shared/createpaymetid';
import CustomerId from '../../src/API/customerId';
expect.extend(matchers);

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const customerIds = new CustomerId();
const stripeCustomer = customerIds.getCustomerId('stripe');
const stripeApi = new StripeApi();
const getPaymentsStatusRoute =
  `/user/${stripeCustomer}/payments/`;

jest.retryTimes(3); //set maximum retries number

describe('Stripe API Tests', () => {
  test('Payment Status', async () => {
    const paymentId = await createPaymentId(
      stripeCustomer
    );
    await sleep(10000);
    const fullRoute = `${getPaymentsStatusRoute}${paymentId}/get-payment-status`;
    const response = await stripeApi.get(fullRoute);
    expect(response.status).toBe(200);
  });
});
