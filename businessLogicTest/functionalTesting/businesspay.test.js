import * as matchers from 'jest-extended';
import BusinesspayApi from '../../src/API/businesspayApi';
import { createPlaidToken } from '../../src/shared/createPlaidPublicToken';
import CustomerId from '../../src/API/customerId';
expect.extend(matchers);

const customerIds = new CustomerId();
const businesspayCustomer = customerIds.getCustomerId('business');
const businesspayApi = new BusinesspayApi();
const accountsRoute = `/user/${businessPayCustomer}/path/pathway`;
const paymentRoute =
  `/userPath/${businesspayCustomer}/payments/accountinfoPath`;
const paymentsRoute = `/user/path/${businessPayCustomer}/payments`;
const validationRoute =
  `/user/${businessPayCustomer}/pathway-validation/responsePath`;

jest.retryTimes(3); //set maximum retries number

describe('Businesspay API Tests', () => {
  //businesspay CustomerAccounts
  test('Get Accounts', async () => {
    const response = await businesspayApi.get(accountsRoute);
    expect(response.status).toBe(200);
  });
  //businesspay CustomerPayments
  test('Get Payment', async () => {
    const response = await businesspayApi.get(paymentRoute);
    expect(response.status).toBe(200);
  });
  //businesspay AccountValidation
  test('Get Validation Responses', async () => {
    const response = await businesspayApi.get(validationRoute);
    expect(response.status).toBe(200);
  });
});
