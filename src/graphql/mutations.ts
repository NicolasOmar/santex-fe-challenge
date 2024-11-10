import { gql } from '@apollo/client'
import { ERROR_FIELDS } from './fragments'

const ADD_ITEM_TO_ORDER = gql`
  ${ERROR_FIELDS}
  mutation ($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ...ErrorFields
    }
  }
`

export { ADD_ITEM_TO_ORDER }
