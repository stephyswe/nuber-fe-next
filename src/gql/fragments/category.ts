import { gql } from '@apollo/client';

export const CATEGORY_FRAGMENT = gql`
  fragment CategoryParts on Category {
    id
    name
    coverImg
    slug
    countRestaurants
  }
`;
