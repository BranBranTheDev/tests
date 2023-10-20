import { executeHttpRequest } from '../extensions/requestPromiseExtensions';
import Request from './request';
import TokenGenerator from '@business/qe-tokengenerator-package';
const tokenGenerator = new TokenGenerator(process.env.NODE_ENV);
const endpoint = 'path/stripePath/general/v3';

class StripeApi {
  async get(route) {
    const token = await tokenGenerator.generate('payments-testing');
    return await executeHttpRequest(
      new Request.Builder('api')
        .withMethod('GET')
        .withHeaders({ Authorization: 'Bearer ' + token })
        .withEndpoint(`${endpoint}${route}`)
        .build()
    );
  }

  async post(route, payload) {
    const token = await tokenGenerator.generate('payments-testing');
    return await executeHttpRequest(
      new Request.Builder('api')
        .withMethod('POST')
        .withEndpoint(`${endpoint}${route}`)
        .withHeaders({ Authorization: 'Bearer ' + token })
        .withJsonPayload(payload)
        .build()
    );
  }
}

export default StripeApi;