import IInfo from "../../../interfaces/IInfo";
import Episode from "../../../models/Episode";

export default interface IState {
  episodes: Episode[];
  info: IInfo;
  isLoading: boolean;
}
