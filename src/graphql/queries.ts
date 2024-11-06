import { gql } from "@apollo/client";

const GET_PRODUCT_LIST = gql`
  query {
    products {
      items {
        id
        name
        featuredAsset {
          source
        }
      }
    }
  }
`;

export {
  GET_PRODUCT_LIST
};
