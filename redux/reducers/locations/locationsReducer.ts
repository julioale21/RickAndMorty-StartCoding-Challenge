import {
  FETCH_LOCATIONS,
  FETCH_LOCATION_BY_ID,
  SET_ISLOADING_LOCATIONS,
} from "../../actions/types";
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

    case FETCH_LOCATION_BY_ID:
      return {
        ...state,
        selectedLocation: action.payload.selectedLocation,
      };

    case SET_ISLOADING_LOCATIONS:
      return {
        ...state,
        isLoadingLocations: action.payload.isLoadingLocations,
      };

    default:
      return state;
  }
};

export default locationsReducer;
