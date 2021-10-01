import { Action } from "redux";
import IInfo from "../../../interfaces/IInfo";
import Character from "../../../models/Character";

export default interface IAction extends Action {
  type: string;
  payload: {
    characters: Character[];
    selectedCharacter: Character;
    info: IInfo;
    isLoadingCharacters: boolean;
  };
}
