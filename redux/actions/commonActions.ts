import { Dispatch } from "redux";
import { SET_ISLOADING } from "./types";

export const setIsLoading = (isLoading: boolean, dispatch: Dispatch) => {
  dispatch({
    type: SET_ISLOADING,
    payload: {
      isLoading,
    },
  });
};
