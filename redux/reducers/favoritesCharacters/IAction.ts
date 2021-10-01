import { Action } from "redux";
import Character from "../../../models/Character";

export default interface IAction extends Action {
  type: string;
  payload: {
    favorites: Character[];
    favorite: Character;
    isLoading: boolean;
  };
}
