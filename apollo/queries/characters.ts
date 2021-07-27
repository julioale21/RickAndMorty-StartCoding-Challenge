import { gql } from "@apollo/client";

export const FETCH_CHARACTERS = gql`
  query ($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
        }
        location {
          id
          name
        }
        image
        episode {
          id
          name
          episode
          characters {
            id
            name
          }
        }
      }
    }
  }
`;
