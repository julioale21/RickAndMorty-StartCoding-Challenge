import client from "../apollo/client";
import { FETCH_EPISODES } from "../apollo/queries/episodes";
import IInfo from "../interfaces/IInfo";
import Episode from "../models/Episode";

interface PaginatedEpisodes {
  episodes: Episode[];
  info: IInfo;
}

class EpisodeService {
  static async fetchEpisodes(page?: number): Promise<PaginatedEpisodes> {
    const { data } = await client.query({
      query: FETCH_EPISODES,
      variables: {
        page,
      },
    });

    return {
      episodes: data.episodes.results,
      info: data.episodes.info,
    };
  }
}

export default EpisodeService;
