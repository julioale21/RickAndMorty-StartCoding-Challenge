/* eslint-disable no-console */
import { Dispatch } from "redux";
import EpisodesService from "../EpisodesService";
import { setIsLoading } from "./commonActions";
import { FETCH_EPISODES, FETCH_EPISODE_BY_ID } from "./types";

export const fetchEpisodes = (page?: number) => async (dispatch: Dispatch) => {
  setIsLoading(true, dispatch);
  EpisodesService.fetchEpisodes(page)
    .then((data) => {
      dispatch({
        type: FETCH_EPISODES,
        payload: { episodes: data.episodes, info: data.info },
      });

      setIsLoading(false, dispatch);
    })
    .catch((error) => console.log(error));
};

export const fetchEpisodeById = (id: string) => async (dispatch: Dispatch) => {
  setIsLoading(true, dispatch);
  EpisodesService.fetchEpisodeById(id)
    .then((episode) => {
      dispatch({
        type: FETCH_EPISODE_BY_ID,
        payload: {
          selectedEpisode: episode,
        },
      });
      setIsLoading(false, dispatch);
    })
    .catch((error) => console.log(error));
};
