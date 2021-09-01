import Character from "../../models/Character";
import { Action } from "redux";
import { FETCH_CHARACTERS, SET_ISLOADING } from "../actions/types";

interface IInfo {
  prev: number | null;
  next: number | null;
}

export interface IState {
  characters: Character[];
  info: IInfo;
  isLoading: boolean;
}

interface IAction extends Action {
  type: string;
  payload: {
    characters: Character[];
    info: IInfo;
    isLoading: boolean;
  };
}

const INITIAL_STATE = {
  characters: [],
  info: { next: null, prev: null },
  isLoading: false,
};

const charactersReducer = (state = INITIAL_STATE, action: IAction): IState => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        characters: action.payload.characters,
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

export default charactersReducer;
