import { FETCH_EPISODE_BY_ID } from "./../apollo/queries/episodes";
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

  static async fetchEpisodeById(id: string): Promise<Episode> {
    const { data } = await client.query({
      query: FETCH_EPISODE_BY_ID,
      variables: {
        id,
      },
    });

    return data.episode;
  }
}

export default EpisodeService;
