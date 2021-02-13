import { gql } from '@apollo/client';

export const ALL_COLLECTABLES_QUERY = gql`
  query all {
    collectables {
      id
      name
      price
    }
  }
`;

export const FILTER_COLLECTABLE = gql`
  query filter {
    collectables(where: { id: { _eq: $ID } }) {
      id
      name
    }
  }
`;
