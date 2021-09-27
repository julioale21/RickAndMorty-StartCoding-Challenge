/* eslint-disable no-console */
import { Dispatch } from "redux";
import EpisodesService from "../EpisodesService";
import { setIsLoading } from "./commonActions";
import { FETCH_EPISODES } from "./types";

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
