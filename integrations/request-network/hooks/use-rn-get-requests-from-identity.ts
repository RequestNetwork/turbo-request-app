import { Types } from '@requestnetwork/request-client.js'
import { useQuery } from 'wagmi'

import { getRequestsFromIdentity } from '../actions/get-requests-from-identity'

export const useRnGetRequestsFromIdentity = (
  identity: Types.Identity.IIdentity,
  updatedBetween?: Types.ITimestampBoundaries,
  options?: {
    disablePaymentDetection?: boolean
    disableEvents?: boolean
  },
  queryKey?: any
) => {
  return useQuery(['rnReqeuestsFromIdentity', identity, updatedBetween, options, queryKey], async () =>
    getRequestsFromIdentity(identity, updatedBetween, options)
  )
}
