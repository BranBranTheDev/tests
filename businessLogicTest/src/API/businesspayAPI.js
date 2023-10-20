import {
    executeHttpRequest,
    executeErrorHttpRequest,
  } from '../extensions/requestPromiseExtensions';
  import Request from './request';
  import TokenGenerator from '@business/qe-tokengenerator-package';
  const tokenGenerator = new TokenGenerator(process.env.NODE_ENV);
  const endpoint = 'path/payPath/generic/path/v1';
  
  class BusinesspayApi {
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
      return await executeErrorHttpRequest(
        new Request.Builder('api')
          .withMethod('POST')
          .withEndpoint(`${endpoint}${route}`)
          .withHeaders({ Authorization: 'Bearer ' + token })
          .withJsonPayload(payload)
          .build()
      );
    }
  }
  
  export default BusinesspayApi;