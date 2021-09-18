/* eslint-disable no-console */
import { FETCH_CHARACTERS, FETCH_CHARACTER_BY_ID } from "./types";
import { Dispatch } from "redux";
import CharacterService from "../CharacterService";
import { setIsLoading } from "./commonActions";

export const fetchCharacters = (page?: number) => async (dispatch: Dispatch) => {
  setIsLoading(true, dispatch);
  CharacterService.fetchCharacters(page)
    .then((data) => {
      dispatch({
        type: FETCH_CHARACTERS,
        payload: { characters: data.characters, info: data.info },
      });

      setIsLoading(false, dispatch);
    })
    .catch((error) => console.log(error));
};

export const fetchCharacterById = (id: string) => async (dispatch: Dispatch) => {
  setIsLoading(true, dispatch);
  CharacterService.fetchCharacterById(id)
    .then((character) => {
      dispatch({
        type: FETCH_CHARACTER_BY_ID,
        payload: {
          selectedCharacter: character,
        },
      });
      setIsLoading(false, dispatch);
    })
    .catch((error) => console.log(error));
};
