import { RequestNetwork } from '@requestnetwork/request-client.js'

// Goerli Gateway, hosted by Request Network Foundation for testing purposes
const REQUEST_GATEWAY_URL = 'https://goerli.gateway.request.network/'

export const requestClient = new RequestNetwork({
  nodeConnectionConfig: { baseURL: REQUEST_GATEWAY_URL },
})
