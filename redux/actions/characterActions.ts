/* eslint-disable no-console */
import { FETCH_CHARACTERS, FETCH_CHARACTER_BY_ID, SET_ISLOADING_CHARACTERS } from "./types";
import { Dispatch } from "redux";
import CharacterService from "../CharacterService";

export const setIsLoading = (isLoading: boolean, dispatch: Dispatch) => {
  dispatch({
    type: SET_ISLOADING_CHARACTERS,
    payload: {
      isLoadingCharacters: isLoading,
    },
  });
};

export const fetchCharacters = (page?: number, name?: string) => async (dispatch: Dispatch) => {
  setIsLoading(true, dispatch);
  CharacterService.fetchCharacters(page, name)
    .then((data) => {
      dispatch({
        type: FETCH_CHARACTERS,
        payload: { characters: data.characters, info: data.info },
      });

      setIsLoading(false, dispatch);
    })
    .catch((error) => {
      dispatch({
        type: FETCH_CHARACTERS,
        payload: { characters: [], info: { next: 0, prev: 0 } },
      });

      setIsLoading(false, dispatch);
      console.log(error);
    });
};

export const fetchCharacterById = (id: string) => async (dispatch: Dispatch) => {
  if (!id) return;
  setIsLoading(true, dispatch);
  dispatch({
    type: FETCH_CHARACTER_BY_ID,
    payload: {
      selectedCharacter: null,
    },
  });
  CharacterService.fetchCharacterById(id)
    .then((character) => {
      dispatch({
        type: FETCH_CHARACTER_BY_ID,
        payload: {
          selectedCharacter: character,
        },
      });
    })
    .catch(() => {
      dispatch({
        type: FETCH_CHARACTER_BY_ID,
        payload: {
          selectedCharacter: null,
        },
      });
    })
    .finally(() => {
      setIsLoading(false, dispatch);
    });
};
