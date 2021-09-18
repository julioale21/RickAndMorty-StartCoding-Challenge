import { FETCH_CHARACTERS, FETCH_CHARACTER_BY_ID, SET_ISLOADING } from "../../actions/types";
import { INITIAL_STATE } from "./InitialState";
import IAction from "./IAction";
import IState from "./IState";

const charactersReducer = (state = INITIAL_STATE, action: IAction): IState => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        characters: action.payload.characters,
        info: action.payload.info,
      };

    case FETCH_CHARACTER_BY_ID:
      return {
        ...state,
        selectedCharacter: action.payload.selectedCharacter,
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

export default charactersReducer;
