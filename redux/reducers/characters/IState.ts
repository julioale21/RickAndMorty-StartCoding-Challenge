import Character from "../../../models/Character";
import IInfo from "../../../interfaces/IInfo";

export default interface IState {
  characters: Character[];
  selectedCharacter: Character;
  info: IInfo;
  isLoadingCharacters: boolean;
}
