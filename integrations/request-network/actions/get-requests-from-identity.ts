import { Request, Types } from '@requestnetwork/request-client.js'

import { requestClient } from '../request-client'

export const getRequestsFromIdentity = (
  identity: Types.Identity.IIdentity,
  updatedBetween?: Types.ITimestampBoundaries,
  options?: {
    disablePaymentDetection?: boolean
    disableEvents?: boolean
  }
): Promise<Request[]> => {
  return requestClient.fromIdentity(identity, updatedBetween, options)
}
