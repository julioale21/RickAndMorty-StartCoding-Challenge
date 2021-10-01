import { ADD_TO_FAVORITES, FETCH_FAVORITES, REMOVE_TO_FAVORITES } from "./types";
import { Dispatch } from "redux";
import FavoritesService from "../FavoritesService";
import Character from "../../models/Character";

export const fetchFavorites = () => async (dispatch: Dispatch) => {
  const favorites = await FavoritesService.loadState();

  dispatch({
    type: FETCH_FAVORITES,
    payload: { favorites },
  });
};

export const addToFavorites = (favorite: Character) => async (dispatch: Dispatch) => {
  dispatch({
    type: ADD_TO_FAVORITES,
    payload: { favorite },
  });
};

export const removeFromFavorites = (favorite: Character) => async (dispatch: Dispatch) => {
  dispatch({
    type: REMOVE_TO_FAVORITES,
    payload: { favorite },
  });
};
