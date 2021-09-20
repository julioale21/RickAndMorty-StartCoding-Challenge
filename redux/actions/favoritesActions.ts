import { ADD_TO_FAVORITES, FETCH_FAVORITES, REMOVE_TO_FAVORITES } from "./types";
import { Dispatch } from "redux";
import { setIsLoading } from "./commonActions";
import FavoritesService from "../FavoritesService";
import Character from "../../models/Character";

export const fetchFavorites = () => async (dispatch: Dispatch) => {
  setIsLoading(true, dispatch);
  const favorites = await FavoritesService.loadState();

  dispatch({
    type: FETCH_FAVORITES,
    payload: { favorites },
  });
  setIsLoading(false, dispatch);
};

export const addToFavorites = (favorite: Character) => async (dispatch: Dispatch) => {
  setIsLoading(true, dispatch);
  dispatch({
    type: ADD_TO_FAVORITES,
    payload: { favorite },
  });
  setIsLoading(false, dispatch);
};

export const removeFromFavorites = (favorite: Character) => async (dispatch: Dispatch) => {
  setIsLoading(true, dispatch);
  dispatch({
    type: REMOVE_TO_FAVORITES,
    payload: { favorite },
  });
  setIsLoading(false, dispatch);
};
