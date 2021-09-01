import { FETCH_CHARACTERS, SET_ISLOADING } from "./types";
import { Dispatch } from "redux";

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
};
