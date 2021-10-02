import { FETCH_FAVORITES, ADD_TO_FAVORITES, REMOVE_TO_FAVORITES } from "../../actions/types";
import { INITIAL_STATE } from "./InitialState";
import IAction from "./IAction";
import IState from "./IState";
import FavoritesService from "../../FavoritesService";

const favoritesCharactersReducer = (state = INITIAL_STATE, action: IAction): IState => {
  switch (action.type) {
    case FETCH_FAVORITES:
      return {
        ...state,
        favorites: action.payload.favorites,
      };

    case ADD_TO_FAVORITES:
      FavoritesService.saveState(state.favorites.concat(action.payload.favorite));

      return {
        ...state,
        favorites: state.favorites.concat(action.payload.favorite),
      };

    case REMOVE_TO_FAVORITES:
      FavoritesService.saveState(
        state.favorites.filter((item) => item.id !== action.payload.favorite.id),
      );

      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.payload.favorite.id),
      };

    default:
      return state;
  }
};

export default favoritesCharactersReducer;
