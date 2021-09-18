import { FETCH_EPISODES } from "../../actions/types";
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

    default:
      return state;
  }
};

export default episodesReducer;
