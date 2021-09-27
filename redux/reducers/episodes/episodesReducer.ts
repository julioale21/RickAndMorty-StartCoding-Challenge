import { FETCH_EPISODES, FETCH_EPISODE_BY_ID, SET_ISLOADING } from "../../actions/types";
import IAction from "./IAction";
import { INITIAL_STATE } from "./InitialState";
import IState from "./IState";

const episodesReducer = (state = INITIAL_STATE, action: IAction): IState => {
  switch (action.type) {
    case FETCH_EPISODES:
      return {
        ...state,
        episodes: action.payload.episodes,
        info: action.payload.info,
      };

    case FETCH_EPISODE_BY_ID:
      return {
        ...state,
        selectedEpisode: action.payload.selectedEpisode,
      };

    case SET_ISLOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    default:
      return state;
  }
};

export default episodesReducer;
