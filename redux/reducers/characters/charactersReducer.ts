import {
  FETCH_CHARACTERS,
  FETCH_CHARACTER_BY_ID,
  SET_ISLOADING_CHARACTERS,
} from "../../actions/types";
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

    case SET_ISLOADING_CHARACTERS:
      return {
        ...state,
        isLoadingCharacters: action.payload.isLoadingCharacters,
      };

    default:
      return state;
  }
};

export default charactersReducer;
