import { FETCH_CHARACTERS, SET_ISLOADING } from "./types";
import { Dispatch } from "redux";
import CharacterService from "../CharacterService";

const setIsLoading = (isLoading: boolean, dispatch: Dispatch) => {
  dispatch({
    type: SET_ISLOADING,
    payload: {
      isLoading,
    },
  });
};

export const fetchCharacters = (page?: number) => async (dispatch: Dispatch) => {
  setIsLoading(true, dispatch);
  CharacterService.fetchCharacters(page).then((data) => {
    dispatch({
      type: FETCH_CHARACTERS,
      payload: { characters: data.characters, info: data.info },
    });

    setIsLoading(false, dispatch);
  });
};
