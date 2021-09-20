import Character from "../../../models/Character";

export default interface IState {
  favorites: Character[];
  isLoading: boolean;
}
