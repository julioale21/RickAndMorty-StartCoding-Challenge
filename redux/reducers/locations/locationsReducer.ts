import { FETCH_LOCATIONS, SET_ISLOADING } from "../../actions/types";
import IAction from "./IAction";
import { INITIAL_STATE } from "./InitialState";
import IState from "./IState";

const locationsReducer = (state = INITIAL_STATE, action: IAction): IState => {
  switch (action.type) {
    case FETCH_LOCATIONS:
      return {
        ...state,
        locations: action.payload.locations,
        info: action.payload.info,
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

export default locationsReducer;
