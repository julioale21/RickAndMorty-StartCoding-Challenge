import { gql } from "@apollo/client";

export const FETCH_EPISODES = gql`
  query ($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
        characters {
          id
          name
          image
        }
      }
    }
  }
`;
