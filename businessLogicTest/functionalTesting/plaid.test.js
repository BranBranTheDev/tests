import * as matchers from 'jest-extended';
import PlaidLinkApi from '../../src/API/plaidLinkApi';
import CustomerId from '../../src/API/customerId';

const customerIds = new CustomerId();
const plaidLinkCustomer = customerIds.getCustomerId('plaidlink');
const plaidlinkApi = new PlaidLinkApi();
const microDepositRoute = `mini-path-way/${plaidLinkCustomer}/path`;
const createLinkTokenRoute = `path/add-url-auth/path/${plaidLinkCustomer}`;

expect.extend(matchers);

jest.retryTimes(3); //set maximum retries number

describe('Plaid Link Testing', () => {
    test.only('GET Micro Deposit Status', async () => {
        const response = await plaidlinkApi.get(microDepositRoute);
        expect(response).toHaveProperty('data');
        expect(response).toHaveProperty('data.verificationStatus','DepositFailed');
        expect(response.status).toBe(200);
        //console.log(response);
    });
    test.only('Post Creat Link Token', async () => {
        const response = await plaidlinkApi.post(createLinkTokenRoute);
        expect(response.status).toBe(200);
        //console.log(response.status);
    });
});