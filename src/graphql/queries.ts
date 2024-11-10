import { gql } from '@apollo/client'

const GET_PRODUCT_LIST = gql`
  query {
    products {
      items {
        id
        name
        description
        featuredAsset {
          source
        }
        variants {
          id
          name
          featuredAsset {
            source
          }
          priceWithTax
        }
      }
    }
  }
`

export { GET_PRODUCT_LIST }
