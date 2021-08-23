import { gql } from "@apollo/client";

export const FETCH_LOCATIONS = gql`
  query ($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        pages
        next
        prev
      }
      results {
        id
        name
        type
        dimension
        residents {
          id
          name
          species
          image
        }
      }
    }
  }
`;
