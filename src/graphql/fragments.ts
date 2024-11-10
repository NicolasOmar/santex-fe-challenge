import { gql } from '@apollo/client'

export const ERROR_FIELDS = gql`
  fragment ErrorFields on OrderLimitError {
    message
  }
`
